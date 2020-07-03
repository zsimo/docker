
```sh
docker run -d --network=api-network -p 27017:27017 --name=db --rm mongo:3
docker build --tag=my-app-with-mongo .
docker run -p 3000:3000 --network=api-network --env MONGO_CONNECTION_STRING=mongodb://db:27017 my-app-with-mongo
``` 
