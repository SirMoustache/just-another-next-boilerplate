# Postgres Notes

## Postgres in docker with docker-compose

[Docs](https://hub.docker.com/_/postgres)

Create a new file `docker-compose.yml`:

```yml
version: '3'
services:
  db:
    image: 'postgres:11'
    container_name: 'my_postgres'
    ports:
      - '5432:5432'
    volumes:
      - my_dbdata:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: just_another_db
volumes:
  my_dbdata: {
    external: true
    # or driver: local  ??
  }
```

The alternative is to put env variables in .env file
Need to add to `docker-compose.yml`

```yml
env_file:
  - .env
```

```
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=just_another_db
PGADMIN_DEFAULT_EMAIL=admin
PGADMIN_DEFAULT_PASSWORD=12345
```

## Postgres Docker commands

### `docker-compose up -d`

Build and start container

### `docker logs -f my_postgres`

See the logs:

### `docker exec -it [container_name] psql -U [user_name]`

Try running psql, example: <br />
`docker exec -it my_postgres psql -U postgres`

### `docker exec -it [container_name] psql -U [user_name] -c "create database [database_name]"`

Create a database, example:<br />
`docker exec -it my_postgres psql -U postgres -c "create database my_database"`

### `docker volume create [volume_name]`

Create new volume in container, example:

```bash
docker volume create postgres_database
```

### `docker exec -it [container_name] psql -U [user_name] -c "DROP DATABASE [database_name]"`

Drop a database, example:

```bash
"DROP DATABASE [database_name]
```

```bash
docker exec -it my_postgres psql -U postgres -c "DROP DATABASE postgres"
```

Prevent future connections:

```bash
REVOKE CONNECT ON DATABASE <database_name> FROM public
```

or

```
ALTER DATABASE [database_name]  CONNECTION LIMIT 0
```

```bash
docker exec -it my_postgres psql -U postgres -c "REVOKE CONNECT ON DATABASE postgres FROM public"
```

Force disconnection of all clients connected to a database

```bash
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='[database_name]'
```

```bash
docker exec -it my_postgres psql -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='postgres'"
```

## Postgres in docker with terminal

```bash
docker run -d --name my_postgres -v my_dbdata:/var/lib/postgresql/data -p 5432:5432 postgres:11
```

or

```bash
docker run -p 5432:5432 -d \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=stripe-example \
    -v pgdata:/var/lib/postgresql/data \
    postgres

psql stripe-example -h localhost -U postgres

docker exec -it bdca2b8c09b7 psql -U postgres stripe-example
```

## Tips and Tricks

- Press `Ctrl + D` to exit
