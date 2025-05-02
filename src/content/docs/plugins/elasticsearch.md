---
title: ElasticSearch
description: ElasticSearch
---

ElasticSearch is a powerful engine for searching, logging, and analytics---but only when it's alive and kicking. Whether it's backing your observability stack (e.g., ELK), powering your search features, or crunching log data, keeping tabs on its health is crucial. The **ElasticSearch plugin** in PIHACE does just that: it checks whether your ElasticSearch instance is available and responding properly.

No one likes mysterious 500s or empty dashboards caused by a silent ElasticSearch failure. With this plugin, you'll know right away if it's healthy---or if your logs have fallen into the void.

### When to Use

Consider this plugin indispensable if:

-   You're running an ELK or OpenSearch stack.

-   Your service depends on fast, flexible search capabilities.

-   Your metrics or logs are piped into ElasticSearch via Beats, Logstash, or other collectors.

### Example

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.elasticsearch import ElasticSearch

hc = HealthCheck(name="es-monitor", version="2.0.0")

hc.register(
    "ElasticSearch Core",
    ElasticSearch(
        url="http://localhost:9200",
        basic_auth=("admin", "adminpass")
    ),
    timeout=5
)

result = hc.check(pretty=True)
print(result)
```

### Parameters

-   **url** (*str*): Base URL to the ElasticSearch HTTP endpoint.

-   **basic_auth** (*tuple*, optional): A tuple of `(username, password)` for basic HTTP authentication, if required by your instance.

### What It Checks

-   Can it reach the ElasticSearch server?

-   Is the cluster responding with a valid health status?

-   If auth is enabled, are credentials valid?

### Tips

-   If you're using ElasticSearch with authentication or security plugins (like X-Pack), remember to provide credentials.

-   This plugin performs a light ping---it's ideal for health checks but not for cluster performance monitoring.