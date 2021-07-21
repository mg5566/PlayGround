#include <dirent.h>    // opendir(3)
#include <stdio.h>     // remove(3)
#include <sys/stat.h>  // stat(2)
#include <unistd.h>    // rmdir(2)

#include <iostream>
int delete_path_recurcive(std::string path) {
  struct stat stat_buffer;
  // path 설정

  // stat 동작시키고
  if (stat(path.c_str(), &stat_buffer) != 0) {
    std::cerr << "fail stat(<File>)" << std::endl;
    return (-1);  // error
  }

  if (S_ISDIR(stat_buffer.st_mode)) {
    DIR *dir_ptr;
    struct dirent *item;

    std::cout << path << " is directory" << std::endl;
    if (!(dir_ptr = opendir(path.c_str()))) {
      std::cerr << "fail opendir(<FILE>) " << path << std::endl;
      return (-1);
    }
    while ((item = readdir(dir_ptr))) {
      if (strcmp(item->d_name, ".") == 0 || strcmp(item->d_name, "..") == 0)
        continue;
      std::string new_path(path);
      new_path += "/";
      new_path += item->d_name;
      std::cout << "Good?! : " << new_path << std::endl;
      delete_path_recurcive(new_path);
    }
  } else if (S_ISREG(stat_buffer.st_mode)) {
    std::cout << path << " is file" << std::endl;
    // remove(path.c_str());
  }
  return (0);
}

int main(void) {
  std::string file_name("./test_dir");

  delete_path_recurcive(file_name);
  return (0);
}
