#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Create the shared network if it doesn't exist yet
docker network inspect landing_net >/dev/null 2>&1 || docker network create landing_net

docker compose up -d --build

IP=$(curl -sf --max-time 3 -4 https://icanhazip.com || hostname -I | tr ' ' '\n' | grep -m1 '\.')
echo "Landing page available at: http://localhost:8086"
