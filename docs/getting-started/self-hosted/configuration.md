---
sidebar_position: 2
---

# Configuration

:::info[INFO]
In this section, we assume that the _Invoice-Collector Container_ is running on port `8080`. If your container is not running yet, [see the installation section](./installation.md).
:::

### Networking

Once the _Invoice-Collector Container_ is up and running, we need to verify that the remote _Invoice-Collector Server_ is reachable.
This server is used to send success and errors logs to maintain the health of your collectors. Make sure the container can reach the remote server at url `https://registry.invoice-collector.com`. Verify your firewall and proxy settings.

:::info[INFO]
Credentials and tokens are never sent to the _Invoice-Collector Server_. Sensitive datas never leave your infrastructure.
:::

Run the following command on your machine:
```bash
curl https://registry.invoice-collector.com/v1/ping
```

- If you receive `pong`: Logs will be sent to the _Invoice-Collector Server_ and you are helping improve the service. Thank you!
- If you have and error: No worry, you can still use Invoice-Collector but no logs are sent to the server. We won't be able to help you if you have a problem.
