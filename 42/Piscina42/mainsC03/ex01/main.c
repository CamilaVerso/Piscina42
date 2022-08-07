#include<stdio.h>
#include<string.h>
int	ft_strncmp(char *s1, char *s2, unsigned int n);
int main(void)
{
    char    *s1;
    char    *s2;

    s1 = "Socorro";
    s2 = "Socor";
    printf("%d\n", ft_strncmp(s1, s2, 1));
    printf("%d\n", ft_strncmp(s2, s2, 0));
    printf("%d\n", strncmp(s1, s2, 1));
    printf("%d\n", strncmp(s1, s2, 0));
}

