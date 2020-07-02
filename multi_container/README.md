
create a new bridged network
```sh
docker network create --driver=bridge api-network
docker network ls
```

run redis
```sh
docker run -d --network=api-network -p 6379:6379 --name=redis --rm redis:6-alpine  
docker exec -it redis redis-cli
docker ps
docker top redis
```


build the app container
```sh
cd multi_container
docker build --tag=api-multicontainer .
```

run app with connections
```sh
docker run --rm --detach --publish 3000:3000 --network=api-network --env REDIS_CONNECTION_STRING=redis://redis:6379 api-multicontainer
```


