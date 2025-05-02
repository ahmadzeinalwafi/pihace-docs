---
title: MySQL
description: MySQL
---

Monitoring the availability of your database is absolutely critical---because let's be honest, if your database goes down, your app might as well go out for coffee too. The **MySQL plugin** in PIHACE helps ensure your MySQL service is always responsive and available.

This plugin works by trying to establish a connection to the specified MySQL database using the provided DSN (Data Source Name). If the connection succeeds within the expected time, it's marked healthy. Otherwise, it raises a red flag so you can take action before your users do.

### When to Use

Use this plugin if your application depends on a MySQL database. It's especially helpful in:

-   Microservices that read/write to MySQL.

-   Periodic ETL jobs that connect to MySQL.

-   Systems that expect high-availability MySQL clusters.

### Example

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.mysql import MySQL

hc = HealthCheck(name="mysql-demo", version="1.0.0")

hc.register(
    "Main MySQL DB",
    MySQL(dsn="mysql://root:password@localhost:3306/mydatabase"),
    timeout=5,
    retries=2
)

result = hc.check(pretty=True)
print(result)
```

### Parameters

-   **dsn** (*str*): The full MySQL connection string. Format:\
    `mysql://<user>:<password>@<host>:<port>/<database>`

-   **timeout** (*int*, optional): Maximum time in seconds to wait for the check to complete. Defaults to the system-level timeout.

-   **retries** (*int*, optional): Number of retry attempts in case of failure.

### What It Checks

-   Can the plugin connect to the database server?

-   Is authentication successful?

-   Is the target database reachable?

-   If the service is unreachable or credentials are incorrect, the status will be `unhealthy` and the message will contain diagnostic details.

### Tips

-   Make sure the MySQL server allows remote connections if you're checking from a different machine.

-   Don't forget to use secure credentials---avoid hardcoding them in production environments.
