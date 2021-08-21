#!/bin/sh
podman build -t arching-kaos-radio .
podman run --name arching-kaos-radio --restart always -d arching-kaos-radio
