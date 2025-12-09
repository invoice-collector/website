---
sidebar_position: 1
---

# Overview

## Introduction

Invoice Collector is an open-source, Docker-based tool designed to streamline the process of collecting invoices from various sources such as emails, websites, and APIs. This tool is intended to be self-hosted by clients, providing a flexible and secure solution for managing invoices efficiently.

## Benefits

- **Privacy**: Self-hosting ensures that sensitive data such as credentials, passwords and financial data remains within your private network, reducing the risk of data breaches.
- **Transaparency**: The open-source nature of Invoice-Collector ensures complete transparency. Users can inspect the code, understand how the tool works, and verify that it meets their security and compliance requirements. This transparency builds trust between us and our users. This is extremly important when manipulating sensitive datas.
- **Scalability**: The Docker-based architecture allows for easy scaling, making it suitable for businesses of all sizes, from small startups to large companies.
- **Community**: Being open source, Invoice-Collector benefits from a community of users and developers who contribute to its improvement and provide support.

## How it works

Here is how Invoice-Collector fits in your infrastructure depending on your choice of deployment:

| Cloud-SaaS | Self-Hosted |
|---|---|
| ![infra_cloud](./diagrams/infra_cloud.svg) | ![infra_self_hosted](./diagrams/infra_self_hosted.svg) |

1. User connects to the app and request to modify its collectors.
2. App requests a token to Invoice-Collector matching the user and returns it to the user.
3. The user accepts the [Terms of Use](/terms-of-use), add and delete collectors.
4. Credentials are stored in the secret manager.
5. Invoice-Collector periodically retrieve the credentials from secret manager and collect invoices
6. New invoices are sent to the app
7. Success and error are sent to the log server in order to maintain collectors and perform analytics.

:::info[INFO]
Credentials and tokens are never sent to the _Invoice-Collector Server_. Sensitive datas never leave your infrastructure.
:::
