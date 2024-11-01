---
sidebar_position: 1
---

# Installation

### Requirements

Hardware:
- 8 Gb of memory
- 4 CPUs

Software:
- [Install docker engine](https://docs.docker.com/engine/)
- [Install docker-compose](https://docs.docker.com/compose/install/)

### Docker Compose

In a new folder, create a `docker-compose.yml` file with the following content:
```yaml md title="docker-compose.md"
services:
  invoice-collector:
    image: invoice-collector/invoice-collector:latest
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 8080:8080
    depends_on:
      - redis
    environment:
      - PORT=8080
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - LOG_SERVER_ENDPOINT=https://n8n.bergeron.fr/webhook/invoice_collector
    command: npm run start

  redis:
    image: redis:latest
    ports:
      - 6379:6379
```

:::warning[Warning]

The docker image `invoice-collector/invoice-collector` is not available on docker-hub yet. You won't be able to pull it.

:::

Start the container:
```bash
docker-compose up -d
```

Stop the container:
```bash
docker-compose down
```

### Updates

Collectors are always changing and the invoice-collector image as well to keep them up-to-date. We strongly recommend to automatically update the container on new releases. Check your host documentation on how to do it.

You can still update the container manually:
```bash
docker-compose down
docker-compose pull
docker-compose up -d
```

### Deployments

- **Azure**: [See Azure documentation](https://learn.microsoft.com/en-gb/azure/ai-services/containers/docker-compose-recipe)
- **AWS**: _Soon_
- **Google Cloud**: _Soon_
