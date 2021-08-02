#include <cstdlib>
#include <fstream>
#include <iostream>
#include <streambuf>
#include <string>

#define CRLF 2

void set_string(std::string &str) {
  str += "8";
  str += "\r\n";
  str += "fuck you";
  str += "\r\n";

  str += "b";
  str += "\r\n";
  str += "webserv";
  str += "\r\n";
  str += "GG";
  str += "\r\n";

  str += "0";
  str += "\r\n";
  str += "\r\n";
}

// bool chunked_close_check(const char *buf, int len = -1) {
bool chunked_close_check(const char *buf, std::string &msg, int len = -1) {
  bool result = false;

  size_t length = 0;
  char *ptr;

  ptr = (char *)buf;
  if (len == -1) {
    std::cout << "------------fbuffer---------------" << std::endl;
    length = strtoul(ptr, &ptr, 16);
    std::cout << length << " : " << ptr << std::endl;
    length += CRLF;
    msg.append(ptr, length);
    std::cout << "------------fbuffer---------------" << std::endl;
    while ((length = strtoul(ptr + length, &ptr, 16)) > 0) {
      std::cout << "------------fbuffer---------------" << std::endl;
      std::cout << length << " : " << ptr << std::endl;
      length += CRLF;
      // append
      msg.append(ptr, length);
      // check append length
      // next append
      // check append length
      // loop at finish
      std::cout << "------------fbuffer---------------" << std::endl;
      // if (strcmp(ptr, "\r\n\r\n") == 0)
      //   return (true);
    }
    if (length == 0) {
      if (strcmp(ptr, "\r\n\r\n") == 0) {
        std::cout << "===finish===" << std::endl;
        return (true);
      } else {
        std::cout << "===can't finish===" << std::endl;
        return (false);
      }
    }
  } else {
    length = len;
  }
  return (result);
}

int main(int argc, char **argv) {
  if (argc == 2) {
    std::ifstream t(argv[1]);
    std::string str((std::istreambuf_iterator<char>(t)),
                    std::istreambuf_iterator<char>());

    // int main(void) {
    //   if (1) {
    //     std::string str;

    //     // set str
    // set_string(str);
    std::string msg;

    std::cout << "=============file===============" << std::endl;
    std::cout << str << std::endl;
    std::cout << "=============file===============" << std::endl;

    std::cout << "\n\nlet's check\n\n"
              << std::endl;

    // if (chunked_close_check(str.c_str()))
    if (chunked_close_check(str.c_str(), msg))
      std::cout << "close" << std::endl;
    else
      std::cout << "can't close" << std::endl;

    std::cout << "=============msg================" << std::endl;
    std::cout << msg << std::endl;
    std::cout << "=============msg================" << std::endl;

  } else
    std::cout << "Usage: ./chunked_practice filepath" << std::endl;
}
