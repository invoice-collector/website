---
sidebar_position: 2
---

# Usage

List all the available collectors and collect your first invoice.

:::info[INFO]
In this section, we assume that the _Invoice-Collector Container_ is reachable at `https://localhost:8080`. If your container is not running yet, [see the installation section](./installation.md).
:::

### List collectors

Open a terminal and run the following command to list all the available collectors.

```bash
curl -X GET https://localhost:8080/api/v1/collectors
```

### Collect invoices

In this example we will collect invoices from the `free` collector:

```bash
curl -X POST \
    -H "Content-Type: application/json" \
    -d "{\"webhook\":\"https://my.custom/webhook/url\",\"collector\":\"free\",\"params\":{\"username\":\"my.email@example.com\",\"password\":\"mypassword\"}}" \
    localhost:8080/api/v1/collect
```

Great job, you just collected your first invoice. See the [API Reference](../api-reference/collect.md) for more details.
