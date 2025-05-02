---
title: WebService
description: WebService
---

One of the simplest and most versatile ways to expose your health check results is through an HTTP API. The HTTP Provider allows you to create a RESTful endpoint that your team, monitoring tools, or automated systems can ping to retrieve the current health status of your services.

🔧 How to Use the Web Service (HTTP) Provider
Using the HTTP provider in PIHACE is straightforward. You’ll simply register it as a provider, configure the port, and start serving the health results as a clean, machine-readable JSON format.

Here’s a Python code example demonstrating how to set up the Web Service Provider with PIHACE:

## Example Code

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.http import HTTP
from pihace.providers.web import WebProvider

if __name__ == "__main__":
    hc = HealthCheck(with_system=True, name="example-api", version="v0.1.0")
    hc.register("HTTP D", HTTP(url="https://example.com"))

    http = WebProvider(hc, host='0.0.0.0', port=8000)
    http.serve()
```
## Breakdown of the Code
Step 1: Initialize HealthCheck Instance

We create an instance of the HealthCheck class and configure basic metadata (name, version), and enable system checks using with_system=True.

Step 2: Register Health Checks (Plugins)

We register the services we want to monitor (in this case, MySQL and MongoDB) using hc.register(). Each service is associated with its own plugin (e.g., MySQL or MongoDB), and we can configure timeouts and retries.

Step 3: Create HTTP Provider

The key part is create the HTTP provider using WebProvider(hc). This will expose your health check results at http://localhost:8000/healthcheck. You can adjust the port as needed, or use default ports.

Step 4: Run the Health Check

Finally, we run the health check system with hc.run(), which will start the HTTP server. Once this runs, anyone can visit http://localhost:8000/healthcheck to see the health status of the registered services in a neat JSON format.

🏃 How to Access Health Data
Once your server is running, simply navigate to the following URL in your browser or use any HTTP client (like curl or Postman) to access the health data:

```bash
curl http://localhost:8000/healthcheck
```
Sample Output:
```json
{
  "status": "Available",
  "timestamp": "2023-07-01T14:59:55.711Z",
  "failure": null,
  "rate": "1/1",
  "system": {
    "cpu_usage": "18%",
    "memory_usage": "32%",
    "disk_usage": "47%",
    "memory_available": "512MB",
    "python_version": "3.10",
    "os": "Windows 10"
  },
  "component": {
    "name": "something-api",
    "version": "v1.0.0"
  }
}
```
In this example:

The server responds with a JSON object containing the status of the services ("status": "ok").

Each service (e.g., MySQL and MongoDB) is listed along with its health status ("MySQL A": "ok", "MongoDB B": "ok").

## 🎯 Key Points to Remember:

The HTTP provider acts as an HTTP server, making the health data publicly accessible over the network.

You can adjust the port to avoid conflicts with other services or adhere to your company's API conventions.

This provider is ideal for cloud applications, APIs, and microservices that need to expose their health status to monitoring systems or for manual checks by your team.

## 💡 Next Steps

The HTTP provider is one of the easiest and most commonly used ways to expose health check results. But what if you're working with Prometheus or need to export metrics for a more complex monitoring system?

The next section will explore how to integrate Prometheus Provider, so you can start monitoring your health check results in Grafana!