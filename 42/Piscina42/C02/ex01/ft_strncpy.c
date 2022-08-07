/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: canazare <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/07/25 12:58:07 by canazare          #+#    #+#             */
/*   Updated: 2022/07/28 19:55:07 by fregina-         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
#include <unistd.h>

char	*ft_strncpy(char *dest, char *src, unsigned int nb)
{
	unsigned int	i;

	i = 0;
	while (i < nb)
	{
		dest[i] = '\0';
		i++;
	}
	i = 0;
	while (src[i] != '\0' && i < nb)
	{
		dest[i] = src[i];
		i++;
	}
	return (dest);
}
