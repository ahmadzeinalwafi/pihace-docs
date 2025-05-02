---
title: ElasticSearch
description: ElasticSearch
---

When it comes to storing health check data for future querying, **Elasticsearch** is a powerful choice. Elasticsearch allows you to store, index, and search data efficiently, and it's widely used for logging, monitoring, and observability.

In PIHACE, the **Elasticsearch Pusher** is designed to send health check results to an Elasticsearch cluster, enabling you to index and analyze your health data. This integration is perfect for teams who rely on Elasticsearch for their logging or observability stack and want to include health check data within it.

### How to Use the Elasticsearch Pusher

Here's an example of how to integrate the **Elasticsearch Pusher** in PIHACE. This example demonstrates how to push your health check results to an Elasticsearch cluster.

### Example Code:

```python
from pihace.healthcheck import HealthCheck
from pihace.pusher.elasticsearch import ElasticSearchPusher
from pihace.plugins.http import HTTP
from pihace.plugins.elasticsearch import ElasticSearch

# Initialize the HealthCheck instance
hc = HealthCheck(with_system=True, name="MyApp", version="1.0.0")

# Register a web service (HTTP) health check
hc.register("HTTP D", HTTP(url="https://example.com"))

# Register an Elasticsearch service health check
es_url = "http://localhost:9200"
hc.register("Elastic Search Cluster", ElasticSearch(es_url=es_url), timeout=5, retries=2)

# Initialize the Elasticsearch pusher
logger = ElasticSearchPusher(es_url=es_url, healthcheck=hc)

# Push the health check data to Elasticsearch
logger.push()

# Optionally, push health check data continuously with a fixed interval
# logger.push_forever_in_loop(interval=60)
```

### Breakdown of the Code:

-   **Step 1: Initialize HealthCheck Instance**

    -   First, we initialize a `HealthCheck` instance with basic application metadata, such as the `name` and `version` of the service.

-   **Step 2: Register Health Checks (Plugins)**

    -   In this example, we register two health checks:

        1.  An HTTP health check (`HTTP D`) to monitor the status of a web service.

        2.  An Elasticsearch health check (`Elastic Search Cluster`) to check the availability of the Elasticsearch cluster.

-   **Step 3: Create an Elasticsearch Pusher**

    -   The `ElasticSearchPusher` is initialized with the Elasticsearch URL and the `HealthCheck` instance. This pusher is responsible for taking the health data and sending it to the specified Elasticsearch endpoint.

-   **Step 4: Push Health Data to Elasticsearch**

    -   The `logger.push()` method sends the health check results to Elasticsearch for indexing. This means your health data will now be searchable in Elasticsearch.

-   **Optional: Continuous Pushing**

    -   The `logger.push_forever_in_loop(interval=60)` method can be used if you want the health data to be pushed at regular intervals (e.g., every 60 seconds).


### Key Points to Remember:

-   The **Elasticsearch Pusher** makes it easy to store health check results in Elasticsearch for indexing and querying.

-   You can configure the Elasticsearch URL and control how the health check data is pushed.

-   The `push_forever_in_loop(interval=60)` option is ideal if you need periodic health data updates, ensuring your data remains up to date without manual intervention.

-   The data can be indexed and visualized using powerful tools like **Kibana** or **Grafana**.


### Next Steps

Now that your health check data is stored in Elasticsearch, you can leverage its full power to visualize, monitor, and analyze your health data. If you're using a **message queue** like AMQP for further processing, we'll explore that integration in the next section.