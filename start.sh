#!/bin/sh
podman build -t arching-kaos-radio .
podman run --pod arching-kaos --name arching-kaos-radio --restart always -d arching-kaos-radio
