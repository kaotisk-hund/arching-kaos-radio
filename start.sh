#!/bin/sh
docker build -t arching-kaos-radio .
docker run --name arching-kaos-radio -d -p 5000:5000 arching-kaos-radio
