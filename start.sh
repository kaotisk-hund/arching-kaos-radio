#!/bin/sh
podman build -t arching-kaos-radio .
podman run --name arching-kaos-radio --restart always -d -p 5000:5000 arching-kaos-radio
