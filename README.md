## Download mysql:5.7.24 docker image
```docker
docker pull mysql:5.7.24
```

## Database: run images, expose port 3306 
```docker
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pass mysql:5.7.24 
```


## Find mysql container id
```
docker ps

docker stop <containerId>

docker start <containerId>
```
