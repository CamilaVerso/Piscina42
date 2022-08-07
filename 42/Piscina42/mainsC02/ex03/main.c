#include<stdio.h>
int	ft_str_is_numeric(char *str);

int main()
{
    int result;

    result = ft_str_is_numeric("asdf");
    printf("asdf: %d\n", result);

    result = ft_str_is_numeric("QWERTY");
    printf("QWERTY: %d\n", result);

    result = ft_str_is_numeric("asdf1234");
    printf("asdf1234: %d\n", result);

    result = ft_str_is_numeric("000999");
    printf("000999: %d\n", result);

    result = ft_str_is_numeric("");
    printf("" ": %d\n", result);
    
    return 0;
}

