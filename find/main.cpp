// string::find
#include <iostream>       // std::cout
#include <string>         // std::string

/*
   find 는 중간에 있든 앞에 있든 obj_str 에서 needle 만 찾아준다.
   obj_str 의 특정 구간에서 needle 을 찾고 싶다면, compare 를 사용하는 것이 용이하다.
 */
int main ()
{
	std::string str ("There are two needles in this haystack with needles.");
	std::string str2 ("needle");

	// different member versions of find in the same order as above:
	std::size_t found = str.find(str2);
	if (found!=std::string::npos)
		std::cout << "first 'needle' found at: " << found << '\n';

	found=str.find("needles are small",found+1,6);
	if (found!=std::string::npos)
		std::cout << "second 'needle' found at: " << found << '\n';

	found=str.find("haystack");
	if (found!=std::string::npos)
		std::cout << "'haystack' also found at: " << found << '\n';

	found=str.find('.');
	if (found!=std::string::npos)
		std::cout << "Period found at: " << found << '\n';

	// let's replace the first needle:
	str.replace(str.find(str2),str2.length(),"preposition");
	std::cout << str << '\n';

	return 0;
}
