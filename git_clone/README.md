
```sh
docker build -t cloner .
docker run -it --detach cloner bash
docker run -it cloner bash
docker system prune -a
```