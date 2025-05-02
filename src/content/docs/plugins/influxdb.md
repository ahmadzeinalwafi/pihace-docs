---
title: InfluxDB
description: InfluxDB
---

When it comes to storing and querying time-series data, **InfluxDB** is often the go-to solution. Whether you're tracking application metrics, sensor data, or system performance logs, ensuring your InfluxDB instance is up and responsive is essential to maintaining observability.

The **InfluxDB plugin** in PIHACE verifies the reachability and authentication to your InfluxDB server. It doesn't run a heavy query or mutate your data---it simply ensures that the system is healthy, authenticated, and ready to serve your time-sensitive data needs.

### When to Use

Use this plugin if your application or monitoring stack:

-   Stores telemetry, sensor data, or logs in InfluxDB.

-   Pushes periodic metrics for dashboards.

-   Performs analytics that depend on real-time measurements.

### Example

```python

from pihace.healthcheck import HealthCheck
from pihace.plugins.influxdb import InfluxDB

hc = HealthCheck(name="influx-monitor", version="1.0.0")

hc.register(
    "Metrics InfluxDB",
    InfluxDB(
        url="http://localhost:8086",
        token="my-secret-token",
        org="example-org"
    ),
    timeout=4,
    retries=2
)

result = hc.check(pretty=True)
print(result)
```

### Parameters

-   **url** (*str*): Base URL of the InfluxDB server (e.g., `http://localhost:8086`).

-   **token** (*str*): API token for authentication.

-   **org** (*str*): Your InfluxDB organization name.

### What It Checks

-   Is the InfluxDB HTTP endpoint reachable?

-   Does the token authenticate successfully?

-   Can it communicate with the `/health` endpoint provided by InfluxDB?

### Tips

-   Make sure your token has permission to read from the organization you specify.

-   Check that the InfluxDB service is listening on the correct port and is not blocked by firewalls or proxies.

-   Useful in both development and production to track uptime of your telemetry backend.
