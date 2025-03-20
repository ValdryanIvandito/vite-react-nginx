# 1. Working with Images

## Build an Image:

```bash
docker build -t <username/image_name>:<tag> <Dockerfile_folder>
```

## List available Docker images:

```bash
docker image ls
```

## Remove an image:

```bash
docker rm <image_id_or_name>
```

## Push an Image to DockerHub:

### Step-1 Login to DockerHub

```bash
docker login -u <username>
```

### Step-2 Push to DockerHub

```bash
docker push <username>/<imagename>:<tag>
```

## Pull an Image from DockerHub:

```bash
docker pull <username>/<imagename>:<tag>
```

# 2. Working with Containers

## Create and Run a container in interactive mode with a terminal:

```bash
docker run -it <image> bash
```

## Create and run a container in detached mode (background):

```bash
docker run -d <image>
```

## List running containers:

```bash
docker container ls
```

_or_

```bash
docker ps
```

## List all containers (both running and stopped containers):

```bash
docker container ls -a

```

_or_

```bash
docker ps -a
```

## Stop a running container:

```bash
docker stop <container_id_or_name>
```

## Start a stopped container:

```bash
docker start <container_id_or_name>
```

## Restart a container:

```bash
docker restart <container_id_or_name>
```

## Remove a container:

```bash
docker container rm <container_id_or_name>
```

## View logs of a container:

```bash
docker logs <container_id_or_name>
```

## View the last 100 lines of logs:

```bash
docker logs --tail 100 <container_id_or_name>
```

## Access a running container’s shell:

```bash
docker exec -it <container_id_or_name> sh
```

# 3. Working with Volumes and Networks

## List all Docker volumes:

```bash
docker volume ls
```

## Remove a volume:

```bash
docker volume rm <volume_id_or_name>
```

## List all Docker networks:

```bash
docker network ls
```

## Create a new Docker network:

```bash
docker network create <network_name>
```

## Remove a network:

```bash
docker network rm <network_name>
```

# 4. Cleaning Up Resources

## Remove unused images:

```bash
docker image prune
```

## Remove all stopped containers:

```bash
docker container prune
```

## Remove unused volumes:

```bash
docker volume prune
```

## Remove unused images, containers, and networks:

```bash
docker system prune
```
