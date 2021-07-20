#include <unistd.h>  // rmdir(2)
#include <sys/stat.h>  // stat(2)
#include <dirent.h>  // opendir(3)
#include <stdio.h>  // remove(3)

#include <iostream>

int main(void) {
  std::string file_name("./test_dir");
  struct stat stat_buffer;      // stat buffer
  DIR *dir_ptr;                 // directory stream
  struct dirent *item;          // readdir

  // stat 으로 mode 를 확인한다
  if (stat(file_name.c_str(), &stat_buffer) != 0) {
      std::cerr << "fail stat(<File>)" << std::endl;
      return (-1);
  }

  if (S_ISDIR(stat_buffer.st_mode)) {
    std::cout << file_name << " is directory" << std::endl;
    // open directory
    if (!(dir_ptr = opendir(file_name.c_str()))) {
      std::cerr << "fail opendir(<FILE>)" << std::endl;
      return (-1);
    }
    while ((item = readdir(dir_ptr))) {
      // item 이 NULL 이라고해서 error 는 아닙니다. pointer 가 끝난것! 따라서 error 는 아니고, 더이상 innerfile 이 존재하지 않는것!
      // if (!(item = readdir(dir_ptr))) {
      //   std::cerr << "fail readdir(<*DIR>)" << std::endl;
      //   return (-1);
      // }
      std::cout << item->d_name << std::endl;
      // 이때, file 이 아닌 directory 면 재귀적으로 동작해야합니다.
    }
    closedir(dir_ptr);
  } else if (S_ISREG(stat_buffer.st_mode)) {
    std::cout << file_name << " is file" << std::endl;
  }

  return (0);
}
