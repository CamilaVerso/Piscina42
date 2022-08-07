#include<stdio.h>

char	*ft_strlowcase(char *str);
int main()
{
    char str[] = "Camila NeW Cadete";
    ft_strlowcase(str);
    
    printf("%s\n", str);
}
