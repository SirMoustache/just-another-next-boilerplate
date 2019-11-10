# docker commands

## `docker container ls [OPTIONS]`

List containers

## `docker container kill [OPTIONS] CONTAINER [CONTAINER...]`

Kill one or more running containers

## `docker logs [OPTIONS] CONTAINER`

Fetch the logs of a container <br/>
Example: `docker logs -f my_postgres`

| Option        | Description       |
| ------------- | ----------------- |
| --follow , -f | Follow log output |

## `docker-compose up [options] [--scale SERVICE=NUM...] [SERVICE...]`

Builds, (re)creates, starts, and attaches to containers for a service.

| Option       | Description                                     |
| ------------ | ----------------------------------------------- |
| -d, --detach | Detached mode: Run containers in the background |
