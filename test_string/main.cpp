#include <string>
#include <iostream>

int main(void) {
  std::string str;

  str += "Hello World";

  std::cout << "str [" << str << "]" << std::endl;

  str.clear();

  std::cout << "str [" << str << "]" << std::endl;

  std::cout << "str length() : " << str.length() << std::endl;
  std::cout << "strlen       : " << strlen(str.c_str()) << std::endl;
  return (0);
}
