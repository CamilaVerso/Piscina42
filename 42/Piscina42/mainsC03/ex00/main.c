#include<stdio.h>
int	ft_strcmp(char *s1, char *s2);
int main(void)
{
    char    *str1;
    char    *str2;

    str1 = "Camilaaaa";
    str2 = "Camila";
    printf("%d\n", ft_strcmp(str1, str2));
}