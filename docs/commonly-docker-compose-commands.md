# Commonly Used Docker Compose Commands

## Manually Build Images Without Running Containers:

```bash
docker compose build
```

## View Running Containers:

```bash
docker compose ps
```

## Rebuild and Start Containers with an interactive terminal:

```bash
docker compose up --build
```

## Rebuild and Start single service with an interactive terminal:

```bash
docker compose up --build <service_name>
```

## Rebuild and Start Containers in Detached Mode:

```bash
docker compose up -d --build
```

## Rebuild and Start service in Detached Mode:

```bash
docker compose up -d --build <service_name>
```

## Stop Services (Stops and removes containers and networks):

```bash
docker compose down
```

## Restarts all services:

```bash
docker compose restart
```

## Restarts single service:

```bash
docker compose restart <service_name>
```

## Stops single service:

```bash
docker compose stop <service_name>
```

## Check Logs:

```bash
docker compose logs
```

## Follow logs in real-time:

```bash
docker compose logs -f
```

## Execute Commands Inside a Running Container

```bash
docker compose exec <service_name> <command>
```

_or_

```bash
docker compose exec <service_name> sh
```
