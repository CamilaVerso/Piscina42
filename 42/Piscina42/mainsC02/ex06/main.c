#include <stdio.h>
int	ft_str_is_printable(char *str);
int main()
{
    int result;

    result = ft_str_is_printable("asdf");
    printf("asdf: %d\n", result);

    result = ft_str_is_printable("QWERTY");
    printf("QWERTY: %d\n", result);

    result = ft_str_is_printable("asd f1234~");
    printf("asd f1234~: %d\n", result);

    result = ft_str_is_printable("999");
    printf("999: %d\n", result);

    result = ft_str_is_printable("");
    printf(""": %d\n", result);
 
 return(0);
}

