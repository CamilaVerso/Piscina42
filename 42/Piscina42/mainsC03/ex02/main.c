#include<stdio.h>
#include<string.h>
char	*ft_strcat(char *dest, char *src);
int main(void)
{
    char    dest[50] = "Bom dia ";
    char    *src;

    src = "meus amigos";
    printf("%s\n", ft_strcat(dest, src));
    
}