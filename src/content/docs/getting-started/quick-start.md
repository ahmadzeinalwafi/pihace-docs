---
title: Quick Start
description: Quick Start
---

Ready to get PIHACE up and running in no time? Let's walk through a quick setup to show how easy it is to start monitoring your system's health.

### 1\. Create a Simple Health Check

Let's create a basic health check to verify if your web service is running. Create a new Python file, e.g., `health_check.py`:

```python
from pihace import HealthChecker

from pihace.plugins.http import HTTP

# Create a new health checker instance
health_checker = HealthChecker()

# Register an HTTP health check for your web service
health_checker.register("Web Service", HTTP(url="https://example.com"))

# Run the health check and print the results
results = health_checker.check()

print(results)
```

### 2\. Configure Pushers (Optional)
You may want to push the health check results to a monitoring tool or log them somewhere. Here’s an example of pushing the results to an ElasticSearch instance:

```python

from pihace.pushers import ElasticSearchPusher

logger = ElasticSearchPusher(es_url=es_url, healthcheck=hc)
logger.push()
```

In this example:

We’re using the ElasticsearchPusher to send the results to an ElasticSearch server. The push() method will run the checks and automatically push the results to the specified endpoint.

### 3\. Run Your Script

Once your script is ready, simply run it:

```
python health_check.py
```

You should see the health check results printed in the console, and if you've configured a pusher, those results will also be sent to the configured endpoint.