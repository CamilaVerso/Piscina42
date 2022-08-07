#include <stdio.h>
#include <string.h>
int main () {
   char src[40];
   char dest[17];
  
   strcpy(src, "Vou virar Cadete!");
   strncpy(dest, src, 16);

   printf("Cópia da string : %s\n", dest);
   
   return(0);
}
