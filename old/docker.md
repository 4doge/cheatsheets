# Docker cheatsheet

### Build
- `docker build -t <container_name>:<tag> .`
### List containers
- `docker ps` for running
- `docker ps --all` for all
### Run and map ports
- `docker run -it -p 9000:80 <container_name>`
### Stop
- `docker stop <container_name>` for regular stop
- `docker kill <container_name>` for immediate stop
### Remove
- `docker rmi $(docker images -q)` for all images
- `docker rm $(docker ps -aq)` for all containers
### Execute bash
- `docker exec -it <container_name> bash`
### Logging (last 100 lines)
- `docker logs --tail 100 <container_name>`
