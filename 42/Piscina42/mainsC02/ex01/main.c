#include <stdio.h>
#include <string.h>

char    *ft_strncpy(char *dest, char *src, unsigned int n);

int     main(void)
{
    char    dest[] = "                                   ";
    char    *src;
    int     size;

    size = 15;
    src = "Bom dia meus amigos";
//  printf(".%s.\n\n", ft_strncpy(dest, src, size));
    printf(".%s.\n\n", strncpy(dest, src, size));
}

