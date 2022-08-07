#!/bin/sh
ifconfig | grep ether | sed 's/ether//g; s/[ \t]*$//g' | awk '{print$1}'
