#include <dirent.h>    // opendir(3)
#include <stdio.h>     // remove(3)
#include <sys/stat.h>  // stat(2)
#include <unistd.h>    // rmdir(2)

#include <iostream>

std::string make_new_path(std::string path, char *d_name) {
  std::string new_path(path);

  new_path += "/";
  new_path += d_name;

  return (new_path);
}

int remove_file(std::string file_name) {
  if (remove(file_name.c_str()) != 0) {
    std::cerr << "fail remove(<FILE>) " << file_name << std::endl;
    return (-1);
  }
  std::cout << "success remove " << file_name << std::endl;
  return (0);
}

int remove_directory(std::string directory_name) {
  if (rmdir(directory_name.c_str()) == -1) {
    std::cerr << "fail rmdir(<DIR>) " << directory_name << std::endl;
    return (-1);
  }
  std::cout << "success rmdir " << directory_name << std::endl;
  return (0);
}

int delete_path_recurcive(std::string &path) {
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
      /*
      std::string new_path(path);
      new_path += "/";
      new_path += item->d_name;
      std::cout << "Good?! : " << new_path << std::endl;
      */
      std::string new_path = make_new_path(path, item->d_name);
      std::cout << "test print new_path : " << new_path << std::endl;
      if (delete_path_recurcive(new_path) == -1) {
        std::cout << "Error!!! " << new_path << std::endl;
        return (-1);
      }
    }
    std::cout << "finish inner search " << path << std::endl;
    return (remove_directory(path));
    /*
    if (rmdir(path.c_str()) == -1) {
      std::cerr << "fail rmdir(<DIR>) " << path << std::endl;
      return (-1);
    }
    */
  } else if (S_ISREG(stat_buffer.st_mode)) {
    std::cout << path << " is file" << std::endl;
    if (remove(path.c_str()) != 0) {
      std::cerr << "fail remove(<FILE>) " << path << std::endl;
      return (-1);
    }
    std::cout << "success remove " << path << std::endl;
  }
  return (0);
}

int main(void) {
  std::string file_name("./test_dir");
  struct stat stat_buffer;

  if (stat(file_name.c_str(), &stat_buffer) != 0) {
    std::cerr << "fail stat(<File>)" << std::endl;
    return (-1);  // error
  }

  if (S_ISDIR(stat_buffer.st_mode)) {
    DIR *dir_ptr;
    struct dirent *item;

    if (!(dir_ptr = opendir(file_name.c_str()))) {
      std::cerr << "fail opendir(<FILE>) " << file_name << std::endl;
      return (-1);
    }
    while ((item = readdir(dir_ptr))) {
      if (strcmp(item->d_name, ".") == 0 || strcmp(item->d_name, "..") == 0)
        continue;
      std::string new_path = make_new_path(file_name, item->d_name);
      std::cout << "test print new_path : " << new_path << std::endl;
      if (delete_path_recurcive(new_path) == -1) {
        std::cout << "Error!!! " << new_path << std::endl;
        return (-1);
      }
    }
  } else if (S_ISREG(stat_buffer.st_mode)) {
    std::cout << file_name << " is file" << std::endl;
    return (remove_file(file_name));
    /*
    if (remove(file_name.c_str()) != 0) {
      std::cerr << "fail remove(<FILE>) " << file_name << std::endl;
      return (-1);
    }
    */
  }

  return (0);
}
