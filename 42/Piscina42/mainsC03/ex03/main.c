#include <stdio.h>
#include <string.h>

char *ft_strncat(char *dest, char *src, unsigned int nb);

int main(void)
{
	char dest[50] = "Bom dia";
	char *src;
	unsigned int size;

	size = 12;
	src = " meus amigos";
	printf(".%s.\n", strncat(dest, src, size));
}
