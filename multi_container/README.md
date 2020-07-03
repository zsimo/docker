
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

nginx
```sh
docker build --tag=nginx ./nginx/
docker run -d --network=api-network -p 8080:80 nginx
# run a container from docker hub
docker run -d --network=api-network -p 8080:80 --name=nginx --rm nginx:alpine 
# copy config from the container
docker cp nginx:/etc/nginx/nginx.conf .
docker exec -it nginx sh
```


build the app container
```sh
cd multi_container
docker build --tag=api ./api/
```

run app with connections
```sh
docker run -d --network=api-network -p 3000:3000 --name=api --env REDIS_CONNECTION_STRING=redis://redis:6379 api
```


