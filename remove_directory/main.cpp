#include <unistd.h>  // rmdir(2)
#include <sys/stat.h>  // stat(2)
#include <dirent.h>  // opendir(3)
#include <stdio.h>  // remove(3)

#include <iostream>

/*
int process_stat(std::string &file_name, struct stat *stat_buffer) {
  if (stat(file_name.c_str(), stat_buffer) != 0) {
    std::cerr << "fail stat(<FILE>)" << std::endl;
    return (-1);
  }
  return (0);
}

void process_remove_dir(std::string file_name, DIR *dir_ptr) {

}
*/

int main(void) {
  std::string file_name("./test_dir");
  struct stat stat_buffer;      // stat buffer

  // stat 으로 mode 를 확인한다
  if (stat(file_name.c_str(), &stat_buffer) != 0) {
    std::cerr << "fail stat(<File>)" << std::endl;
    return (-1);
  }
  // process_stat(file_name, &stat_buffer);

  if (S_ISDIR(stat_buffer.st_mode)) {
    DIR *dir_ptr;                 // directory stream
    struct dirent *item;          // readdir

    std::cout << file_name << " is directory" << std::endl;
    // open directory
    // process_remove_dir(file_name, dir_ptr);
    if (!(dir_ptr = opendir(file_name.c_str()))) {
      std::cerr << "fail opendir(<FILE>)" << std::endl;
      return (-1);
    }
    int cnt = 0;
    while ((item = readdir(dir_ptr))) {
      // item 이 NULL 이라고해서 error 는 아닙니다. pointer 가 끝난것! 따라서 error 는 아니고, 더이상 innerfile 이 존재하지 않는것!
      // if (!(item = readdir(dir_ptr))) {
      //   std::cerr << "fail readdir(<*DIR>)" << std::endl;
      //   return (-1);
      // }
      std::cout << "in " << file_name << " " << cnt << " : " << item->d_name << std::endl;
      cnt++;
      if (strcmp(item->d_name, ".") == 0 || strcmp(item->d_name, "..") == 0)
        continue ;

// /*
      // 이때, file 이 아닌 directory 면 재귀적으로 동작해야합니다.
      std::string new_path(file_name);
      new_path += "/";
      new_path += item->d_name;

      // if (stat(item->d_name, &stat_buffer) != 0) {
      if (stat(new_path.c_str(), &stat_buffer) != 0) {
        std::cerr << "fail stat(<FILE>)" << new_path << std::endl;
        return (-1);
      }
      if (S_ISDIR(stat_buffer.st_mode)) {
        DIR *new_dir_ptr;                 // directory stream
        struct dirent *new_item;          // readdir

        // std::cout << new_item->d_name << " is directory" << std::endl;
        std::cout << new_path << " is directory" << std::endl;
        // if (!(new_dir_ptr = opendir(new_item->d_name))) {
        if (!(new_dir_ptr = opendir(new_path.c_str()))) {
          std::cerr << "fail opendir(<FILE>)" << new_path << std::endl;
          return (-1);
        }
        int inner_cnt = 0;
        while ((new_item = readdir(new_dir_ptr))) {
          std::cout <<  "in " << new_path << " " << inner_cnt << " : " << new_item->d_name << std::endl;
          inner_cnt++;
          if (strcmp(new_item->d_name, ".") == 0 || strcmp(new_item->d_name, "..") == 0)
            continue ;
        }
        closedir (new_dir_ptr);
      } else if (S_ISREG(stat_buffer.st_mode)) {
        std::cout << item->d_name << " is file" << std::endl;
      }
// */

      // 하위 탐색 끝나면
      // rmdir(file_name.c_str());
    }
    closedir(dir_ptr);

    /*
    if (rmdir(file_name.c_str()) != 0) {  // -1 is fail, 0 is success
      std::cerr << "rmdir fail...." << file_name << std::endl;
      return (-1);
    }
    */
  } else if (S_ISREG(stat_buffer.st_mode)) {
    std::cout << file_name << " is file" << std::endl;
    // remove(file_name.c_str());
  }

  return (0);
}
