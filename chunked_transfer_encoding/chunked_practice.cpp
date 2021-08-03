#include <cstdlib>
#include <fstream>
#include <iostream>
#include <streambuf>
#include <string>
#include <fcntl.h>
#include <unistd.h>

#define CRLF 2

typedef struct  s_data {
  int           fd;
  size_t        appended_length;
  size_t        previous_message_buffer_length;
  std::string   message_buffer;
  s_data data() {
    appended_length = 0;
    previous_message_buffer_length = message_buffer.length();
  };  // 생성과 동시에 초기화를 위한 생성자

  s_data data(char *file_name) {
    fd = open(file_name, O_RDWR);
    appended_length = 0;
    previous_message_buffer_length = message_buffer.length();
  }
}               t_data;

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

// bool chunked_close_check(const char *buf, int len = -1) {
// bool chunked_close_check(const char *buf, std::string &msg, int len = -1) {
bool chunked_close_check(const char *buf, t_data &data, int len = -1) {
  bool result = false;

  size_t length = 0;
  char *ptr;

  ptr = (char *)buf;
  if (len == -1) {
    /*
    length = strtoul(ptr, &ptr, 16);
    // std::cout << length << " : " << ptr << std::endl;
    msg.append(ptr + CRLF, length);
    std::cout << "msg test : " << msg << "|" << std::endl;
    length += CRLF;
    */
    while ((length = strtoul(ptr + length, &ptr, 16)) > 0) {
      std::cout << length << " : " << ptr << std::endl;
      // append
      data.message_buffer.append(ptr + CRLF, length);  // 중요한 문제 여기서 appended_len 을 어떻게 계산을 할 수 있는가!?
      // data.appended_length = data.message_buffer.length() - data.previous_message_buffer_length;

      // fd 활용 예제
      data.appended_length = write(data.fd, ptr + CRLF, length);

      std::cout << "data.message_buffer test : " << data.message_buffer << std::endl;
      length += CRLF;
      // check append length
      // append 된 character 의 수를 알아야합니다. appended_len
      // appended_len 이 length 와 같아야 정상이지만, 메세지가 그렇게 호락호락하게 오질 않습니다.
      // 따라서 appeded_len 이 length 보다 작으면 다음 조건문을 실행합니다.
      /*
      if (appended_len < length) {
        // 해당 부분은 수정이 필요합니다.
        // 다음 메세지를 기다려야합니다.
        // 다음 메세지에는 length 부터 오는 것이 아닌 append 되어야할 남은 msg 가 먼저옵니다.
        // 남은 msg 를 붙이고 다음 동작을 합니다.
        data.message_buffer.append(ptr, length - appended_len);
        // length - appended_len 을 기억하고 있다가 다음 메시지가 왔을때, 해당 함수가 호출되면 append msg 부터 하도록 해야할듯?!
        continue;
      } else if (appened_len > length) { // appended_len 이 length 보다 클 순 없습니다. 그런경우 false 를 반환합니다.
        return (false);
      }
      */
      // next append
      // check append length
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
    std::string str((std::istreambuf_iterator<char>(t)),
                    std::istreambuf_iterator<char>());

    // int main(void) {
    //   if (1) {
    //     std::string str;
    //     // set str
    // set_string(str);
    // std::string msg;  // buffer, decoded data
    t_data  data;  // 선언과 동시에 생성자가 알아서 호출됨.
    // t_data data(argv[2]);
    // t_data *data = (t_data *)malloc(sizeof(t_data) * 1)); 이 과정을 생략할 수 있습니다.

    std::cout << "=============file===============" << std::endl;
    std::cout << str << std::endl;  // encoded data
    std::cout << "=============file===============" << std::endl;

    std::cout << "\n\nlet's check\n\n"
              << std::endl;

    // if (chunked_close_check(str.c_str()))
    // if (chunked_close_check(str.c_str(), msg))
    if (chunked_close_check(str.c_str(), data))
      std::cout << "close" << std::endl;
    else
      std::cout << "can't close" << std::endl;

    std::cout << "=============msg================" << std::endl;
    std::cout << data.message_buffer << std::endl;
    std::cout << "=============msg================" << std::endl;
  } else
    std::cout << "Usage: ./chunked_practice filepath" << std::endl;
}
