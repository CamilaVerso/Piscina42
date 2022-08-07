#include <stdio.h>
#include <string.h>

char *ft_strstr(char *str, char *to_find);

int main(void)
{
    char *str;
    char *to_find;

     str = "Bom dia meus amigos";
    to_find = "meus";
     printf("%s\n", ft_strstr(str, to_find));
     printf("%s\n", strstr(str, to_find));
     to_find = "";
     printf("%s\n", ft_strstr(str, to_find));
    printf("%s\n", strstr(str, to_find));
    to_find = "dia";
     printf("%s\n", ft_strstr(str, to_find));
     printf("%s\n", strstr(str, to_find));
     to_find = "s";
     printf("%s\n", ft_strstr(str, to_find));
     printf("%s\n", strstr(str, to_find));
     to_find = "os";
     printf("%s\n", ft_strstr(str, to_find));
     printf("%s\n", strstr(str, to_find));
}
