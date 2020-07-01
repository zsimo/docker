
build a container using the dockerfile in the current directory
```sh
docker build --tag volume-container .
docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data volume-container
docker volume list
```


mount type volume used for db and logs