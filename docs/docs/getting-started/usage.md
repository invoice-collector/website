---
sidebar_position: 2
---

# Usage

List all the available collectors and collect your first invoice.

### List collectors

Open a terminal and run the following command to list all the available collectors.

```bash
curl -X GET <container-ip>:8080/api/v1/collectors
```

### Collect invoices

In this example we will collect invoices from the `free` collector:

```bash
curl -X POST \
    -H "Content-Type: application/json" \
    -d "{\"webhook\":\"https://my.custom/webhook/url\",\"collector\":\"free\",\"params\":{\"username\":\"my.email@example.com\",\"password\":\"mypassword\"}}" \
    <container-ip>:8080/api/v1/collect
```

See the API Reference page for more details.
