---
sidebar_position: 2
---

# Bitwarden

In this tutorial, we will see how to setup a Bitwarden Vault account for self-hosted invoice-collector.

### Prerequisits

- Create an account on [vault.bitwarden.eu](https://vault.bitwarden.eu) or [vault.bitwarden.com](https://vault.bitwarden.com).

### Steps

1. On the bottom left corner, select `Secrets Manager` and go to `Projects`.
2. Create a new project. This project acts like a folder in which all the credentials will be stored. The UUID bellow the newly created project corresponds to the [`SECRET_MANAGER_BITWARDEN_PROJECT_ID`](../../developers/environment-variables.md) environment variable.
3. Create a new `Machine account`. The machine account will be used by invoice-collector to write and read credentials in the vault.
4. In tab `Projects`, give read and write permissions for the project you created step 2 and save the changes.
5. In tab `Access tokens`, create a new access token that never expires. Copy the access token in a safe place, it corresponds to the [`SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN`](../../developers/environment-variables.md) environment variable.
6. In tab `Config`, the organization ID corresponds to the [`SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID`](../../developers/environment-variables.md) environment variable.

Do not forget to set the `SECRET_MANAGER_BITWARDEN_API_URI` and `SECRET_MANAGER_BITWARDEN_IDENTITY_URI` accordingly. See the [environment variables](../../developers/environment-variables.md) page for more infos.
