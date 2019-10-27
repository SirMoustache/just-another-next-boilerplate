# Notes

## Init typeorm
`typeorm init --name [server name] --database [postgress]`

## Create postgres database
`createdb [db name]`

## Postgres in docker
[Docs](https://hub.docker.com/_/postgres)

Create a new file `docker-compose.yml`:

```yml
version: "3"
services:
  db:
    image: "postgres:11"
    container_name: "my_postgres"
    ports:
      - "5432:5432"
    volumes:
      - my_dbdata:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: just-another-next-boilerplate
volumes:
  my_dbdata:
```

Build and start container
`docker-compose up -d`


See the logs:
`docker logs -f my_postgres`

Try running psql:
`docker exec -it [constainer_name] psql -U [user_name]`
`docker exec -it my_postgres psql -U postgres`

Press `Ctrl + D` to exit

Create a database
`docker exec -it my_postgres psql -U postgres -c "create database my_database"`

or 
```bash
docker run -d --name my_postgres -v my_dbdata:/var/lib/postgresql/data -p 54320:5432 postgres:11
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