#!/bin/sh
docker build -t arching-kaos-radio .
docker run -d -p 5000:5000 archkaradio
