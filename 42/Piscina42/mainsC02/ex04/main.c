#include <stdio.h>
int	ft_str_is_lowercase(char *str);
int main()
{
    int result;

    result = ft_str_is_lowercase("asdf");
    printf("asdf: %d\n", result);

    result = ft_str_is_lowercase("QWERTY");
    printf("QWERTY: %d\n", result);

    result = ft_str_is_lowercase("asdf1234");
    printf("asdf1234: %d\n", result);

    result = ft_str_is_lowercase("000999");
    printf("000999: %d\n", result);

    result = ft_str_is_lowercase("");
    printf(""": %d\n", result);
    
    return 0;
}

