---
sidebar_position: 2
---

# Configuration

Once the container is up and running, we need to verify that the remote Invoice-Collector server is reachable. As described in this section, the server is used to collect logs and ensures that the collectors are up to date.

### Networking

Make sure the container can reach the remote server at url `https://n8n.bergeron.fr/`. Verify your firewall and proxy settings.

### Ping!

Open a browser and navigate to [`https://localhost:8080/ping`](https://localhost:8080/ping)

<!-- image of ping -->

If you are a premium customer, copy your token and paste it in the input field.

Hit the `Ping!` button to try to reach the server.

**Subscription**
| Free | Premium |
|------|---------|
|Your token is valid, it ensures we will maintain your collectors and prioritize them over other users.|You did not specify any token or the current token is invalid. We won't be able to maintain your collectors and prioritize them over other users.|

**Message**
| Success Free | Success Premium | Warning | Error |
|--------------|-----------------|---------|-------|
|Great job! You can reach the server and you are ready to collect invoices. You did not specify any token, we won't be able to maintain your collectors and prioritize them over other users.|Great job! You can reach the server and you are ready to collect invoices. Your token is valid, it ensures we will maintain your collectors and prioritize them over other users.|BBBrrr! You can reach the server and you are ready to collect invoices but your token is invalid. We won't be able to maintain your collectors and prioritize them over other users. Contact the support at `support@invoice-collector.com` to verify your token.|Outch! Something is wrong with your network. The container cannot reach the server at url: `https://n8n.bergeron.fr/`. Check your firewall and proxy settings.|
