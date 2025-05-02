---
title: Prometheus
description: Prometheus
---

When it comes to monitoring, **Prometheus** has emerged as one of the most widely used systems for scraping and collecting metrics. Integrating PIHACE with Prometheus allows you to expose health check results as Prometheus-compatible metrics, so they can be scraped and visualized in tools like **Grafana**.

### How to Use the Prometheus Provider

The **Prometheus Provider** in PIHACE transforms your health check data into a format that Prometheus understands. With just a few lines of code, you can make your system's health available for Prometheus to scrape at regular intervals.

Here's an example of how to set up the **Prometheus Provider**:

### Example Code:

```python
from pihace.healthcheck import HealthCheck
from pihace.providers.prometheus import PrometheusProvider
from pihace.plugins.http import HTTP

hc = HealthCheck(name="myapp", version="1.0.0")

hc.register("MySQL A", MySQL(dsn="mysql://root:root@localhost:3306/testdb"), timeout=5, retries=2)
hc.register("MongoDB B", MongoDB(dsn="mongodb://localhost:27017"))

exporter = PrometheusProvider(healthcheck=hc)
exporter.serve()
```

### Breakdown of the Code:

-   **Step 1: Initialize HealthCheck Instance**

    -   As with the Web Service provider, we initialize the `HealthCheck` instance with `name` and `version` metadata and enable system checks using `with_system=True`.

-   **Step 2: Register Health Checks (Plugins)**

    -   We register the services we wish to monitor (e.g., MySQL and MongoDB). Each plugin gets registered with necessary connection details, timeouts, and retries.

-   **Step 3: Add Prometheus Provider**

    -   This is where we add the Prometheus provider to our health check system with `hc.add_provider(Prometheus(port=9090))`. The provider will expose health check results in Prometheus-compatible metric format on the specified port.

-   **Step 4: Run the Health Check**

    -   Finally, we start the health check service with `hc.run()`. This will make the metrics available at `http://localhost:9090/metrics` for Prometheus to scrape.

### How to Access Prometheus Metrics

Once the service is running, you can access the Prometheus metrics at the following URL:

```bash
curl http://localhost:9090/metrics
```

#### Sample Output:

```plaintext
# HELP mysql_up The MySQL service is healthy
# TYPE mysql_up gauge
mysql_up{service="MySQL A"} 1

# HELP mongodb_up The MongoDB service is healthy
# TYPE mongodb_up gauge
mongodb_up{service="MongoDB B"} 1
```

In this example:

-   **MySQL** and **MongoDB** health statuses are represented as Prometheus **gauges**.

-   A value of `1` indicates the service is healthy (`"up"`), and a value of `0` would indicate an unhealthy service.

### Key Points to Remember:

-   The **Prometheus Provider** exposes health check results in a **Prometheus-compatible format**.

-   Prometheus can scrape these metrics regularly, and you can visualize them in **Grafana** or other tools.

-   The provider serves the health check results on a **separate HTTP endpoint** (in this case, `http://localhost:9090/metrics`).

-   You can **customize** the exposed metrics names, labels, and types according to your needs.
