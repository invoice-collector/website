---
sidebar_position: 1
---

# Installation

### Requirements

Hardware:
- 4 Gb of memory
- 2 CPUs

Software:
- [Install docker engine](https://docs.docker.com/engine/)
- [Install docker-compose](https://docs.docker.com/compose/install/)

### Docker Compose

In a new folder, create a `docker-compose.yml` file with the following content:
```yaml md title="docker-compose.md"
services:
  invoice-collector:
    image: ghcr.io/invoice-collector/invoice-collector:latest
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 8080:8080
    depends_on:
      - mongodb
    environment:
      - PORT=8080
      - REGISTRY_SERVER_ENDPOINT=https://registry.invoice-collector.com
      - DATABASE_URI=mongodb://mongodb:27017
      - DATABASE_MONGODB_NAME=prod
      - SECRET_MANAGER_TYPE=bitwarden
      - SECRET_MANAGER_BITWARDEN_API_URI=https://vault.bitwarden.eu/api
      - SECRET_MANAGER_BITWARDEN_IDENTITY_URI=https://vault.bitwarden.eu/identity
      - SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN=
      - SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID=
      - SECRET_MANAGER_BITWARDEN_PROJECT_ID=
      - PROXY_TYPE=none
      - ENV=prod
    command: npm run start

  mongodb:
    image : mongo:8.0.3
    container_name: mongodb
    volumes:
      - ./mongodb/data:/data/db
      - ./mongodb/config:/etc/mongo/
    ports:
      - 27017:27017
    command: --logpath /dev/null

```

Checkout the [environment variables page](../../developers/environment-variables.md) to see what to set.

### Start & Stop

Start the container:
```bash
docker-compose up -d
```

:::info[INFO]
From this point on, we will assume that the _Invoice-Collector Container_ is reachable at `http://localhost:8080`.
:::


Stop the container:
```bash
docker-compose down
```

### Updates

Collectors are always changing and the invoice-collector image as well to keep them up-to-date. We strongly recommend to automatically update the container on new releases. Check your host documentation on how to do it.

You can still update the container manually by running:
```bash
docker-compose down
docker-compose pull
docker-compose up -d
```

### Deployments

Follow our tutorials to deploy the container on your cloud provider:

- [**Azure Landing Zone**](../../tutorials/deployement/azure-landing-zone.md)
- [**AWS ECS**](../../tutorials/deployement/amazon-web-service.md)
- [**Google Cloud**](../../tutorials/deployement/google-cloud.md)
