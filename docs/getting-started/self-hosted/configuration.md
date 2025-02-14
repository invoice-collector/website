---
sidebar_position: 2
---

# Configuration

Once the _Invoice-Collector Container_ is up and running, we need to verify that the remote _Invoice-Collector Server_ is reachable.

:::info[INFO]
Credentials and tokens are never sent to the _Invoice-Collector Server_. Sensitive datas never leave your infrastructure.
:::

:::info[INFO]
In this section, we assume that the _Invoice-Collector Container_ is reachable at `https://localhost:8080`. If your container is not running yet, [see the installation section](./installation.md).
:::

### Networking

Make sure the container can reach the remote server at url `https://api.invoice-collector.com`. Verify your firewall and proxy settings.

### Ping!

Open a browser and navigate to [`https://localhost:8080/ping`](https://localhost:8080/ping)

<!-- image of ping -->

If you are a premium customer, copy your activation key and paste it in the input field.

Hit the `Ping!` button to try to reach the server.

**Subscription**
| Free | Premium |
|------|---------|
|You did not specify any token or the current token is invalid. We won't be able to maintain your collectors and prioritize them over other users.|Your token is valid, it ensures we will maintain your collectors and prioritize them over other users.|

**Message**
| Success Free | Success Premium | Warning | Error |
|--------------|-----------------|---------|-------|
|Great job! You can reach the server and you are ready to collect invoices. You did not specify any token, we won't be able to maintain your collectors and prioritize them over other users.|Great job! You can reach the server and you are ready to collect invoices. Your token is valid, it ensures we will maintain your collectors and prioritize them over other users.|BBBrrr! You can reach the server and you are ready to collect invoices but your token is invalid. We won't be able to maintain your collectors and prioritize them over other users. Contact the support at `support@invoice-collector.com` to verify your token.|Outch! Something is wrong with your network. The container cannot reach the server at url: `https://api.invoice-collector.com`. Check your firewall and proxy settings.|
