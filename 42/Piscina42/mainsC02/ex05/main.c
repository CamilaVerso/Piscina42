#include <stdio.h>
int	ft_str_is_uppercase(char *str);
int main()
{
    int result;

    result = ft_str_is_uppercase("asdf");
    printf("asdf: %d\n", result);

    result = ft_str_is_uppercase("QWERTY");
    printf("QWERTY: %d\n", result);

    result = ft_str_is_uppercase("asdf1234");
    printf("asdf1234: %d\n", result);

    result = ft_str_is_uppercase("000999");
    printf("000999: %d\n", result);

    result = ft_str_is_uppercase("");
    printf(""": %d\n", result);
    
    return 0;
}

