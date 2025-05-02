---
title: Multiple Service Basics 
description: Multiple Service Basics 
---

In real-world applications, it's common to monitor multiple services simultaneously. PIHACE makes this process straightforward by allowing you to register multiple services and run their health checks all at once. Whether you're monitoring databases, APIs, or other services, PIHACE's flexible architecture makes it easy to check the health of all your systems.

Below is an example of how to configure health checks for multiple services, including **MySQL**, **MongoDB**, **InfluxDB**, and a simple **HTTP** endpoint:

### Example Code

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.mysql import MySQL
from pihace.plugins.mongodb import MongoDB
from pihace.plugins.influxdb import InfluxDB
from pihace.plugins.http import HTTP

# Initialize the health check instance
hc = HealthCheck(with_system=True, name="example-api", version="v0.1.0")

# Register services with their respective plugins and configurations
hc.register("MySQL A", MySQL(dsn="mysql://root:root@localhost:3306/testdb"), timeout=5, retries=2)
hc.register("MongoDB B", MongoDB(dsn="mongodb://localhost:27017"))
hc.register("InfluxDB C", InfluxDB(url="http://localhost:8086", token="admintoken", org="myorg"))
hc.register("HTTP D", HTTP(url="https://example.com"))

# Run health checks and output the result in a readable format
result = hc.check(output="dict", pretty=True)
print(result)
```

### Explanation

1.  **Initialize the HealthCheck Instance**:\
    We start by creating an instance of `HealthCheck`. The `with_system=True` argument ensures that system-related checks (like disk space and CPU usage) are included, while the `name` and `version` arguments help identify the service being monitored.

2.  **Register Services**:\
    Each service is registered using the `hc.register()` method. This method links a specific plugin (e.g., `MySQL`, `MongoDB`, `InfluxDB`, `HTTP`) to a service check. For each service, you provide the necessary configuration details such as connection strings or URLs.

    -   **MySQL**: We register a MySQL service with a DSN (Data Source Name) connection string to connect to a local MySQL database. We also specify a `timeout` of 5 seconds and `retries` of 2 to handle transient connection issues.

    -   **MongoDB**: Similarly, MongoDB is registered using a connection string pointing to a local MongoDB instance.

    -   **InfluxDB**: We configure InfluxDB by providing the URL of the InfluxDB instance, along with an authentication token and organization name.

    -   **HTTP**: We also check the health of a remote HTTP service (`https://example.com`).

3.  **Run Health Checks**:\
    After registering all services, the `hc.check()` method is called to execute the health checks. The `output="dict"` argument tells PIHACE to return the results in dictionary format, and `pretty=True` ensures that the output is formatted for readability.

4.  **Print Results**:\
    Finally, the result of the health check is printed. This will show you the health status of all the registered services.

### What Does the Output Look Like?
The output will be a dictionary showing the health status, if there are failure it will try to catch the message
```json
{
  "status": "Partially Available",
  "timestamp": "2023-07-01T14:59:55.711Z",
  "failure": {
    "MongoDB B": "authentication failed"
  },
  "rate": "3/4",
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