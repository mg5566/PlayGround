#include <unistd.h>
#include <string>

int main(void) {
	std::string file_name("./dir");

	rmdir(file_name.c_str());
	return (0);
}
