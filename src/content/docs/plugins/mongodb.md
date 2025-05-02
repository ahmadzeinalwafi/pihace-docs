---
title: MongoDB
description: MongoDB
---

MongoDB has become a cornerstone of modern applications thanks to its flexibility and schema-less nature. But flexibility doesn't mean much if the service is down. The **MongoDB plugin** in PIHACE ensures your application can always talk to its favorite document database before something goes sideways.

This plugin performs a straightforward but critical check: it attempts to establish a connection with your MongoDB instance using the given connection URI. If the server is online, accepting connections, and the URI is valid, the check will pass. Otherwise, it will notify you with a helpful error message---no mystery debugging here.

### When to Use

Use this plugin if your system depends on a MongoDB service for any of the following:

-   Core data storage or caching.

-   Logging pipelines.

-   Analytics dashboards.

### Example

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.mongodb import MongoDB

hc = HealthCheck(name="mongo-monitor", version="1.0.0")

hc.register(
    "Primary MongoDB",
    MongoDB(dsn="mongodb://localhost:27017"),
    timeout=3,
    retries=1
)

result = hc.check(pretty=True)
print(result)
```

### Parameters

-   **dsn** (*str*): MongoDB connection URI.\
    Format: `mongodb://<user>:<password>@<host>:<port>` or just `mongodb://localhost:27017` for a local default instance.

-   **timeout** (*int*, optional): Maximum seconds to wait for the check to complete.

-   **retries** (*int*, optional): Number of retry attempts on failure.

### What It Checks

-   Is the MongoDB instance reachable at the given address?

-   Can it establish a client connection?

-   Is the server up and listening on the right port?

### Tips

-   If your MongoDB instance is running inside a container or cloud environment, double-check its network accessibility from where PIHACE runs.

-   When using authentication, ensure the URI includes proper credentials and any required authentication database.