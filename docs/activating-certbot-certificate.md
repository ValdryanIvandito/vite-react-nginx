# Activating Certbot Certificate

## Step-1 Create docker-compose.yaml file, nginx directory and nginx.conf file,

```bash
touch docker-compose.yaml
mkdir nginx
touch nginx/nginx.conf
```

## Step-2 Create HTTP reverse proxy configuration on port 80

Open text editor

```bash
sudo nano nginx/nginx.conf
```

Copy and paste this nginx config script to text editor

```bash
events {
    worker_connections 1024;
}

# WITHOUT CERTIFICATE
http {
    server_tokens off;
    charset utf-8;

    server {
        listen 80 default_server;
        server_name _;

        location / {
            proxy_pass http://app:4173;
        }
    }
}
```

Then save and exit -> CTRL+0 and press Enter then CTRL+X

## Step-3 Create docker-compose.yaml file

Open text editor

```bash
sudo nano docker-compose.yaml
```

Copy and paste this script to text editor

```bash
services:
  app:
    image: miraclemonad/react-app:latest
    container_name: app
    restart: always
    ports:
      - "4173:4173"
    networks:
      - my_network

  nginx:
    image: nginx
    container_name: nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    networks:
      - my_network

  certbot:
    image: certbot/certbot
    container_name: certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    command: certonly --webroot -w /var/www/certbot --force-renewal --email <your_email@example.com> -d <your_domain.com> --agree-tos

networks:
  my_network:
    driver: bridge
```

Then save and exit -> CTRL+0 and press Enter then CTRL+X

## Step-4 Specify A Record on the Server

Go to domain -> DNS Setting -> Records
Example: Type = A -> Name = @ -> Value = Server IP Address -> TTL = 14400

## Step-5 Build Image and Run Services

```bash
docker compose up --build
```

If process success:
certbot | Successfully received certificate.
certbot exited with code 0

Then press CTRL + C to exit

## Step-6 Modify Nginx proxy server configuration to enable HTTPS on port 443

Open text editor

```bash
sudo nano nginx/nginx.conf
```

Copy and paste this script to text editor

```bash
events {
    worker_connections 1024;
}

# HTTPS WITH CERTIFICATE
http {
    server_tokens off;
    charset utf-8;

    server {
        listen 80 default_server;
        server_name _;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        ssl_certificate /etc/letsencrypt/live/<your_domain.com>/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/<your_domain.com>/privkey.pem;
        server_name <your_domain.com>;

        location / {
            proxy_pass http://app:4173;
        }

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }
    }
}
```

Then save and exit -> CTRL+0 and press Enter then CTRL+X

## Step-5 Re-run services

```bash
docker compose up -d
```

Check running containers or services:

```bash
docker compose ps
```

Open browser and search your site using domain

# Reference:

[Programonaut Youtube Channel: How to Secure Your Applications with HTTPS Using Docker, NGINX, and Let's Encrypt](https://youtu.be/J9jKKeV1XVE)

[Programonaut Website: Setup SSL with Docker, NGINX, and Lets Encrypt](https://www.programonaut.com/setup-ssl-with-docker-nginx-and-lets-encrypt/)
