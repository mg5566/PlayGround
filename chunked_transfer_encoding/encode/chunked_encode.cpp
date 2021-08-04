#include <fstream>
#include <iostream>
#include <streambuf>
#include <string>
#include <cstdio>

#define CRLF "\r\n"

int main(int argc, char *argv[]) {
  if (argc != 2) {
    std::cout << "Error: use argument" << std::endl;
    return (0);
  }
  int body_size;       // entity body size  향후 chunked number 에 사용된다. hex 로 converting 이 필요합니다.
  char hex_num_str[20];
  std::string buffer;  // encoding 된 message 를 채울 buffer

  // 0. read origin body
  std::ifstream file(argv[1]);
  std::string str((std::istreambuf_iterator<char>(file)),  // 이거 왜 괄호를 채워야 error 가 없어짐???
                  std::istreambuf_iterator<char>());
  std::cout << "=====str=====" << std::endl;
  std::cout << str << std::endl;
  std::cout << "=============" << std::endl;

  // 1. calc body size
  body_size = str.length();
  std::cout << "body size : " << body_size << std::endl;
  sprintf(hex_num_str, "%X", body_size);
  std::cout << "hex num : " << hex_num_str << std::endl;
  // TODO: converte int to hex

  // 2. write body size + CRLF
  // buffer += body_size;  // it has not been converted yet.... so ascii 52 is dec 4
  buffer += hex_num_str;
  buffer += CRLF;

  // 3. write buffer + CRLF
  buffer.append(str);
  buffer += CRLF;

  // 4. write 0 CRLF CRLF
  buffer += "0";
  buffer += CRLF;
  buffer += CRLF;

  // done
  // test print buffer (encoded data)
  std::cout << "====test print encoded data====" << std::endl;
  std::cout << buffer;
  std::cout << "=======done=========" << std::endl;
  return (0);
}
