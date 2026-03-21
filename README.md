# 🚀 Portfolio – DevOps Edition

A personal portfolio built from scratch with **HTML, CSS, and JavaScript**, without frontend frameworks, and enhanced with real **DevOps practices**: containerization, automated CI/CD, and deployment-ready infrastructure.

```
Local Code → Docker → GitHub Actions → Docker Hub
```

---

## 📖 Overview

This isn't just a static website. It's a fully containerized application with an automated pipeline that builds, tags, and publishes a production-ready Docker image on every push. The goal is to demonstrate how DevOps engineering applies even to the simplest projects, turning a personal portfolio into a deployable, reproducible system.

---

## 🛠️ Tech Stack

| Layer        | Technology          |
|--------------|---------------------|
| Frontend     | HTML · CSS · JavaScript |
| Web Server   | Nginx (Alpine)      |
| Container    | Docker              |
| CI/CD        | GitHub Actions      |
| Registry     | Docker Hub          |

---

## 📁 Project Structure

```
Portfolio/
├── index.html                # Main page
├── style.css                 # Core styles
├── mediaqueries.css          # Responsive breakpoints
├── script.js                 # Interactions & animations
├── i18n.js                   # EN/ES language support
├── assets/                   # Images, PDFs, favicon
├── Dockerfile                # Container definition (nginx:alpine)
├── nginx.conf                # Custom Nginx config
├── .dockerignore             # Files excluded from the image
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
└── scripts/
    └── deploy.sh             # Automated deployment script
```

---

## 🐳 Docker Setup

The portfolio runs inside a lightweight **Nginx Alpine** container. The custom `nginx.conf` enables gzip compression, static asset caching, and security headers, with no hardcoded domains.

### Build & Run Locally

```bash
# Build the image
docker build -t portfolio-devops .

# Run the container
docker run -d -p 8080:80 --name portfolio portfolio-devops
```

Open **http://localhost:8080** and you're done.

```bash
# Stop & clean up
docker stop portfolio && docker rm portfolio
```

---

## ⚙️ CI/CD Pipeline

Every push to `main` triggers a **GitHub Actions** workflow that:

- Checks out the repository
- Builds the Docker image using Buildx with layer caching
- Tags it with `latest` and the short commit SHA
- Pushes it to Docker Hub

### Required GitHub Secrets

| Secret            | Description                         |
|-------------------|-------------------------------------|
| `DOCKER_USERNAME` | Your Docker Hub username            |
| `DOCKER_PASSWORD` | Docker Hub access token or password |

> 💡 Use a [Docker Hub Access Token](https://hub.docker.com/settings/security) instead of your password for better security.

---

## 📜 Deployment Script

The project includes a ready-to-use deployment script at **`scripts/deploy.sh`**. It automates the full container lifecycle on any machine with Docker installed, by stopping the old container, pulling the latest image, and starting a new one.

```bash
#!/usr/bin/env bash
set -euo pipefail

IMAGE="${1:-portfolio-devops:latest}"
CONTAINER_NAME="portfolio"
HOST_PORT=80

echo "▸ Stopping existing container (if any)..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

echo "▸ Pulling latest image: $IMAGE"
docker pull "$IMAGE" || echo "  (pull skipped – using local image)"

echo "▸ Starting container on port $HOST_PORT..."
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "$HOST_PORT":80 \
  "$IMAGE"

echo "✔ Portfolio is live at http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo 'localhost'):$HOST_PORT"
```

### Usage

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh your-dockerhub-user/portfolio-devops:latest
```

> The script works on any server with Docker (cloud VPS, local machine, or CI runner). Cloud deployment (AWS, etc.) is entirely optional.

---

## 🌐 Custom Domain

The Nginx configuration uses `server_name _` so it accepts requests on any domain out of the box. To connect a custom domain, just point a DNS **A record** to your server's public IP, with no server-side changes needed.

---

## ✨ Final Note

This project is more than a portfolio; it's a demonstration of how **containerization, automation, and infrastructure thinking** can be applied to any project, no matter how small. Every push is built, tagged, and published automatically. Every deployment is one command away.

Built with 🛠️ by **David Gamboa**
