#include <fcntl.h>
#include <unistd.h>

#include <cstdlib>
#include <fstream>
#include <iostream>
#include <streambuf>
#include <string>

#define CRLF 2

typedef struct s_data {
  int fd;
  size_t need_more_append_length;
  std::string message_buffer;

  s_data() {
    need_more_append_length = 0;
  };  // 생성과 동시에 초기화를 위한 생성자

  s_data(std::string file_name) {
    fd = open(file_name.c_str(), O_RDWR | O_CREAT);
    need_more_append_length = 0;
  };
} t_data;

/*
void set_string(std::string &str) {
  str += "8";
  str += "\r\n";
  str += "fuck you";
  str += "\r\n";

  str += "b";
  str += "\r\n";
  str += "web";

  str += "serv";
  str += "\r\n";
  str += "GG";
  str += "\r\n";

  str += "0";
  str += "\r\n";
  str += "\r\n";
}
*/

void set_step_1(std::string &str) {
  str += "7\r\n";
  str += "!@#$";
}

void set_step_2(std::string &str) {
  str += "%^&";
  str += "\r\n";
}

void set_step_3(std::string &str) {
  str += "0\r\n";
  str += "\r\n";
}

// decoder
bool chunked_close_check(const char *buf, t_data &data, int len = -1) {
  bool result = false;
  size_t length = 0;
  char *ptr;

  ptr = (char *)buf;

  // need_more_append_length 가 있으면 마저 읽어 append 후에 length 를 calcuration 합니다.
  if (data.need_more_append_length) {
    std::cout << "first step : append" << std::endl;
    // data.message_buffer.append(ptr, data.need_more_append_length);
    write(data.fd, ptr, data.need_more_append_length);
    data.need_more_append_length = 0;
  }
  if (len == -1) {
    // calc length
    while ((length = strtoul(ptr + length, &ptr, 16)) > 0) {
      /*
      // append
      data.message_buffer.append(ptr + CRLF, std::min(length, strlen(ptr + CRLF)));  // 중요한 문제 여기서 appended_len 을 어떻게 계산을 할 수 있는가!?

      // 지금 문제! 7개를 넣었는데, 뒤에 2글자를 더 읽어오기때문데 무조건 9개를 읽어온다....
      // 따라서 need_more_append_length 는 무조건 0이 나오는 문제에 닥쳤다... ptr 로 읽는건 힘들다...
      // length = 9, appended buffer length = 7  >> need more append 2 character
      data.need_more_append_length = length - std::min(length, strlen(ptr + CRLF));
      std::cout << "-------test print lengths-------" << std::endl;
      std::cout << std::setw(25) << std::left << "length " << " : " << length << std::endl;
      std::cout << std::setw(25) << std::left << "ptr length " << " : " << std::min(length, strlen(ptr + CRLF)) << std::endl;
      std::cout << std::setw(25) << std::left << "need more read length " << " : " << data.need_more_append_length << std::endl;
      std::cout << "---finish test print lengths----" << std::endl;
      */

      // fd 활용 예제 무조건 활용을 하게 되어있습니다. 위에껀 고려하지 마세요!
      size_t temp;
      temp = write(data.fd, ptr + CRLF, std::min(length, strlen(ptr + CRLF)));
      // temp = write(data.fd, ptr + CRLF, length);
      data.need_more_append_length = length - temp;
      // data.need_more_append_length = length - write(data.fd, ptr + CRLF, length);
      std::cout << "-------test print lengths-------" << std::endl;
      std::cout << std::setw(25) << std::left << "length " << " : " << length << std::endl;
      std::cout << std::setw(25) << std::left << "temp " << " : " << temp << std::endl;
      std::cout << std::setw(25) << std::left << "need more read length " << " : " << data.need_more_append_length << std::endl;
      std::cout << "---finish test print lengths----" << std::endl;

      std::cout << "data.message_buffer test : " << data.message_buffer << std::endl;
      length += CRLF;
      // check append length
      // append 된 character 의 수를 알아야합니다. appended_len
      // appended_len 이 length 와 같아야 정상이지만, 메세지가 그렇게 호락호락하게 오질 않습니다.
      // 따라서 appeded_len 이 length 보다 작으면 다음 조건문을 실행합니다.
      // next append
      // check append length
      if (data.need_more_append_length > length) {  // appended_len 이 length 보다 클 순 없습니다. 그런경우 false 를 반환합니다.
        return (false);
      }
    }
    // finish loop block
    if (length == 0) {
      if (strcmp(ptr, "\r\n\r\n") == 0) {
        std::cout << "===finish===" << std::endl;
        result = true;
      } else {
        std::cout << "===can't finish===" << std::endl;
      }
    }
  } else {
    // content - length
  }
  return (result);
}

int main(int argc, char **argv) {
  if (argc == 2) {
    std::ifstream t(argv[1]);
    std::string str1((std::istreambuf_iterator<char>(t)),
                    std::istreambuf_iterator<char>());

    std::string str;

    str.clear();
    set_step_1(str);

    t_data data("./output_decode");  // 선언과 동시에 생성자가 알아서 호출됨.
    // t_data data(argv[2]);
    // t_data *data = (t_data *)malloc(sizeof(t_data) * 1)); 이 과정을 생략할 수 있습니다.

    std::cout << "=============file===============" << std::endl;
    std::cout << str << std::endl;  // encoded data
    std::cout << "=============file===============" << std::endl;

    std::cout << "\n\nlet's check\n\n"
              << std::endl;

    // chunked decoder
    // if (chunked_close_check(str.c_str(), data))
    if (chunked_close_check(str.c_str(), data))
      std::cout << "close" << std::endl;
    else
      std::cout << "can't close" << std::endl;

    str.clear();
    set_step_2(str);

    std::cout << "=============file===============" << std::endl;
    std::cout << str << std::endl;  // encoded data
    std::cout << "=============file===============" << std::endl;

    std::cout << "\n\nlet's check\n\n"
              << std::endl;

    if (chunked_close_check(str.c_str(), data))
      std::cout << "close" << std::endl;
    else
      std::cout << "can't close" << std::endl;

    str.clear();
    set_step_3(str);

    std::cout << "=============file===============" << std::endl;
    std::cout << str << std::endl;  // encoded data
    std::cout << "=============file===============" << std::endl;

    std::cout << "\n\nlet's check\n\n"
              << std::endl;

    if (chunked_close_check(str.c_str(), data))
      std::cout << "close" << std::endl;
    else
      std::cout << "can't close" << std::endl;

/*
    std::cout << "=============msg================" << std::endl;
    std::cout << data.message_buffer << std::endl;
    std::cout << "=============msg================" << std::endl;
*/
  } else
    std::cout << "Usage: ./chunked_practice filepath" << std::endl;
}
