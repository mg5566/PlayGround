/*
Compare strings
Compares the value of the string object (or a substring) to the sequence of characters specified by its arguments.

The compared string is the value of the string object or -if the signature used has a pos and a len parameters- the substring that begins at its character in position pos and spans len characters.

This string is compared to a comparing string, which is determined by the other arguments passed to the function.
*/

#include <iostream>
#include <string>

int main(void) {
	std::string uri("/test/index.html");
	std::string only_slash("/");
	int result;

	result = uri.compare("/");  // expect result = 1
	std::cout << "uri.compare(\"/\") : " << result << std::endl;

	result = only_slash.compare("/");  // expect result = 0
	std::cout << "only_slash.compare(\"/\") : " << result << std::endl;

	return (0);
}
