# Scheduling Certbot Certificate Renewal

## Step-1 Find docker path location:

```bash
whereis docker
```

Example output:

```bash
/usr/bin/docker
```

## Step-2 Create cron job:

Open crontab

```bash
crontab -e
```

Choose 1 to use nano editor then copy paste script below,

Every 2 Months, 1st Day at 5:00 AM:

```bash
0 5 1 */2 * sudo <docker path location> compose -f <docker-compose.yaml path location> up certbot
```

or


Daily at Midnight:

```bash
0 0 * * * sudo <docker path location> compose -f <docker-compose.yaml path location> up certbot
```

Then save and exit -> CTRL+0 and press Enter then CTRL+X

## Step-3 Check cron status:

```bash
systemctl status cron
```

# Reference:

[Programonaut Youtube Channel: How to Secure Your Applications with HTTPS Using Docker, NGINX, and Let's Encrypt](https://youtu.be/J9jKKeV1XVE)

[Programonaut Website: Setup SSL with Docker, NGINX, and Lets Encrypt](https://www.programonaut.com/setup-ssl-with-docker-nginx-and-lets-encrypt/)
