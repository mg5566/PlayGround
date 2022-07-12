docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -aq)

docker build -t ubuntu:node .

docker run -it --rm --name ubuntu-app ubuntu:node
# TODO: Add bind mount source files
