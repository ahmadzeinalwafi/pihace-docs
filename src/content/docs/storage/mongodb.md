---
title: MongoDB
description: MongoDB
---
Storing health check data can be crucial for long-term monitoring, compliance, and analysis. In PIHACE, the **MongoDB Storage** feature allows you to save the results of your health checks into a **MongoDB** database, providing a scalable and easy-to-manage solution for keeping track of your system's health data.

### How Does MongoDB Storage Work?

MongoDB is a popular NoSQL database, known for its flexibility, scalability, and high availability. It stores data in the form of documents (i.e., JSON-like objects), making it an excellent fit for storing health check results that may evolve over time, with varying formats or structures.

By integrating MongoDB with PIHACE, you can directly store health check results in a collection. This allows you to:

-   **Persist Health Data:** Save health check results for future access, enabling historical tracking and trend analysis.

-   **Integrate with Other Systems:** MongoDB's flexibility allows you to integrate health data with other services, analytics tools, or systems.

-   **Scalability:** MongoDB can handle large amounts of health data over time, so it's perfect for high-frequency health checks or distributed systems with multiple services.

### Example Code:

```python
from pihace.healthcheck import HealthCheck
from pihace.plugins.http import HTTP
from pihace.storage.mongodb import MongoStorage

# Initialize the HealthCheck instance with system information
hc = HealthCheck(with_system=True, name="MyApp", version="1.0.0")

# Register a service to check
hc.register("HTTP D", HTTP(url="https://example.com"))

# Execute the health check
result = hc.check()

# Set up MongoDB Storage to save health check data
storage = MongoStorage(hc, dsn="mongodb://localhost:27017", database="myapp", collection="hc_logs")

# Save health check data to MongoDB
storage.save()

# Optionally, save health data continuously at regular intervals (e.g., every 60 seconds)
# storage.run_forever_in_loop(interval=60)
```

### Breakdown of the Code:

-   **Step 1: Initialize the HealthCheck Instance**

    -   As with other health check processes, we start by creating a `HealthCheck` instance. This instance is configured with your application's name, version, and system data (enabled via `with_system=True`).

-   **Step 2: Register Health Checks**

    -   We register a simple health check for an HTTP service (`"HTTP D"`), which pings the specified URL (`https://example.com`) to verify its availability.

-   **Step 3: Execute the Health Check**

    -   The `hc.check()` method runs the health check, gathering results for the services you registered. These results will be used for logging and storage.

-   **Step 4: MongoDB Storage Setup**

    -   The `MongoStorage` instance is initialized by providing:

        -   The `HealthCheck` instance (`hc`) for context.

        -   The **MongoDB connection string** (`dsn`) pointing to your MongoDB server (`localhost:27017`).

        -   The **database** name (`myapp`) and the **collection** name (`hc_logs`), where the health data will be stored.

-   **Step 5: Save Health Data**

    -   The `storage.save()` method saves the health check results into MongoDB. This ensures that the data is stored and can be retrieved later for reporting or analysis.

-   **Optional: Continuous Saving**

    -   The `storage.run_forever_in_loop(interval=60)` method would make the system save health data every 60 seconds. This feature is useful for continuously monitoring your services and ensuring that health data is regularly updated in the database.

### Key Benefits of MongoDB Storage:

-   **Historical Data Access:** Easily query and retrieve health data over time for performance trends and issue tracking.

-   **Scalable Storage:** MongoDB scales well, so even as your application grows and your health check data increases, MongoDB can handle it.

-   **Easy Integration:** Integrates well with other tools, analytics systems, or monitoring dashboards to provide insights into your system's health.

-   **Flexible Schema:** MongoDB's schema-less structure makes it easy to store health data that may vary in format, ideal for situations where health checks evolve.