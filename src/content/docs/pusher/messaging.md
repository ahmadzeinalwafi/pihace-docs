---
title: AMPQ Messaging
description: Messaging
---

In modern applications, **message queues** are a crucial component for decoupling services, improving scalability, and ensuring reliable communication between distributed systems. The **AMQP Messaging Pusher** in PIHACE allows you to send health check data into a message queue, making it an essential tool for integrating health data into your event-driven architecture or real-time processing systems.

**AMQP** (Advanced Message Queuing Protocol) is a protocol that enables communication between different services by allowing the sending and receiving of messages. With the AMQP Pusher, PIHACE can forward your health check results to an AMQP-compatible broker like **RabbitMQ** or **Apache Kafka**, from where other services or systems can consume it and take appropriate action.

### How to Use the AMQP Messaging Pusher

This example demonstrates how to use the **AMQP Messaging Pusher** to send health check results to an AMQP message queue.

### Example Code:

```python

from pihace.healthcheck import HealthCheck
from pihace.pusher.messaging import AMQPPusher

# Initialize the HealthCheck instance
hc = HealthCheck(with_system=True, name="MyApp", version="1.0.0")

# Register a simple health check (example service)
hc.register("example", lambda: True)

# Initialize the AMQP Pusher with the AMQP broker URL
publisher = AMQPPusher(amqp_url="amqp://guest:guest@localhost:5672/", healthcheck=hc)

# Push health check results to the AMQP message queue
publisher.push()

# Optionally, push health check data continuously with a fixed interval
# publisher.push_forever_in_loop(interval=5)`
```
### Breakdown of the Code:

-   **Step 1: Initialize HealthCheck Instance**

    -   As with any other health check, we begin by initializing the `HealthCheck` instance. We also provide the application `name` and `version` for clear identification.

-   **Step 2: Register Health Checks (Plugins)**

    -   In this example, we register a simple health check, named `"example"`. This could be a more complex check in real-world scenarios, but for simplicity, we are using a lambda function that always returns `True` (indicating that the service is healthy).

-   **Step 3: Initialize the AMQP Pusher**

    -   The `AMQPPusher` is initialized by providing the **AMQP broker URL** (in this case, RabbitMQ is running on `localhost:5672`) and the `HealthCheck` instance. This establishes the connection between PIHACE and the AMQP broker.

-   **Step 4: Push Health Data to AMQP**

    -   The `publisher.push()` method sends the health check data to the AMQP broker. This allows your health check results to be transmitted to the message queue, where they can be consumed by other services, like monitoring or alerting systems.

-   **Optional: Continuous Pushing**

    -   The `publisher.push_forever_in_loop(interval=5)` method allows for continuous pushing of health check data every 5 seconds. This feature is useful if you want to stream health data regularly into your messaging system.

### Key Points to Remember:

-   The **AMQP Messaging Pusher** enables seamless integration with message-driven architectures, sending health data into AMQP-based brokers like **RabbitMQ**.

-   Once the health data is in the message queue, it can be consumed by various services for further processing, monitoring, or alerting.

-   **Continuous pushing** is supported through `push_forever_in_loop(interval=5)`, ensuring that your health data is sent at regular intervals without manual intervention.

-   AMQP-based communication is ideal for **distributed systems** and **event-driven architectures**, making it easier to scale your observability and health check systems.