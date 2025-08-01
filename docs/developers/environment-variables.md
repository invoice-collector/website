---
sidebar_position: 2
hide_table_of_contents: true
---

# Environment variables


| Variable | Description | Possible values | Mandatory | Default | Condition |
|----------|-------------|-----------------|-----------|---------|-----------|
| `PORT` | Port on which the API is listening. _Do not forget to open ports on docker container if you change this value._ | `*` | ✔️ | `8080` | None |
| `OAUTH_TOKEN_VALIDITY_DURATION_MS` | Duration in milliseconds for which the OAuth token is valid. | `*` | ❌ | `600000` | None |
| `RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS` | Duration in milliseconds for which the reset password token is valid. | `*` | ❌ | `3600000` | None |
| `UI_BEARER_VALIDITY_DURATION_MS` | Duration in milliseconds for which the UI bearer token is valid. | `*` | ❌ | `3600000` | None |
| `REGISTRY_SERVER_ENDPOINT` | This is the endpoint at which logs are sent and collector updates are downloaded from. | `*` | ✔️ | `https://registry.invoice-collector.com` | None |
| `REGISTRY_SERVER_HEADERS` | Headers to be sent to the registry server. | `*` | ❌ | `{}` | None |
| `DATABASE_URI` | Uri of the MongoDB used to store the data. The credentials are not stored in this database. | `*` | ✔️ | `mongodb://mongodb:27017` | None |
| `DATABASE_MONGODB_NAME` | Name of the database to use. | `*` | ✔️ | `prod` | If `DATABASE_URI` starts with `mongodb` |
| `SECRET_MANAGER_TYPE` | Type of secret manager to use. This is where the credentials are stored. | `bitwarden` | ✔️ | `bitwarden` | None |
| `SECRET_MANAGER_BITWARDEN_API_URI` | API URI for Bitwarden. | `https://vault.bitwarden.eu/api` or `https://vault.bitwarden.com/api` | ✔️ | `https://vault.bitwarden.eu/api` | If `SECRET_MANAGER_TYPE` is `bitwarden` |
| `SECRET_MANAGER_BITWARDEN_IDENTITY_URI` | Identity URI for Bitwarden. | `https://vault.bitwarden.eu/identity` or `https://vault.bitwarden.com/identity` | ✔️ | `https://vault.bitwarden.eu/identity` | If `SECRET_MANAGER_TYPE` is `bitwarden` |
| `SECRET_MANAGER_BITWARDEN_ACCESS_TOKEN` | Access token for Bitwarden. _See [this tutorial](../tutorials/secret_managers/bitwarden.md) how to create it._ | `*` | ✔️ | Empty | If `SECRET_MANAGER_TYPE` is `bitwarden` |
| `SECRET_MANAGER_BITWARDEN_ORGANIZATION_ID` | Organization ID for Bitwarden. _See [this tutorial](../tutorials/secret_managers/bitwarden.md) where to get it._ | `*` | ✔️ | Empty | If `SECRET_MANAGER_TYPE` is `bitwarden` |
| `SECRET_MANAGER_BITWARDEN_PROJECT_ID` | Project ID for Bitwarden.  _See [this tutorial](../tutorials/secret_managers/bitwarden.md) where to get it._ | `*` | ✔️ | Empty | If `SECRET_MANAGER_TYPE` is `bitwarden` |
| `PROXY_TYPE` | Type of proxy to use. | `no_proxy` or `oxylab` | ❌ | `no_proxy` | None |
| `PROXY_OXYLAB_USERNAME` | Username of your oxylab account. | `*` | ✔️ | Empty | If `PROXY_TYPE` is `oxylab`. |
| `PROXY_OXYLAB_PASSWORD` | Password of your oxylab account. | `*` | ✔️ | Empty | If `PROXY_TYPE` is `oxylab`. |
| `REMOTE_CHROME_IP` | IP of the remote [chrome server](https://github.com/invoice-collector/chrome-server). | `*` | ❌ | Empty | None |
| `REMOTE_CHROME_PORT` | Port of the remote [chrome server](https://github.com/invoice-collector/chrome-server). | `*` | ❌ | Empty | None |
| `DISABLE_VERIFICATION_CODE` | Whether the verification code must be disable or not. | `True` or `False` | ❌ | `False` | None |
| `FRONTEND` | URL of the frontend application. | `*` | ✔️ | `http://localhost:8080` | None |
| `ENV` | Environment in which the application is running. | `prod` or `debug` | ❌ | `prod` | None |
| `IS_SELF_HOSTED` | Whether the application is self-hosted or not. | `True` or `False` | ❌ | `True` | None |
