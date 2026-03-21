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
