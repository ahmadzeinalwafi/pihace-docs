---
title: Overview
description: Overview
---

Once health check results are gathered and validated, the next step is to ensure that this data is sent to the right destination for further processing or analysis. This is where **Pushers** come into play.

In PIHACE, **Pushers** are responsible for sending health check results to external endpoints, whether it's a **message queue**, a **search engine**, or a **log aggregation service**. The main goal is to push the results somewhere that can be consumed by other systems, such as monitoring tools, alerting systems, or data warehouses.

This section introduces the concept of **Pushers**, which facilitate the **pushing** of health data from your health check system to other services. PIHACE currently supports a variety of pusher integrations, making it easy to connect with services like **Elasticsearch** and **AMQP message queues**.

### Key Features of Pushers in PIHACE:

-   **Data Forwarding**: Pushers send the health data to external systems (e.g., databases, queues).

-   **Integration Flexibility**: Easily integrate health check results into your **observability**, **alerting**, and **analytics** pipelines.

-   **Reliable Communication**: Pushers ensure that health data is reliably transmitted to the desired destination.

Right now with **Pushers**, PIHACE enables you to:

1.  Forward health results to **Elasticsearch** for indexing and analysis.

2.  Publish health results to **AMQP message queues** (e.g., RabbitMQ, Kafka) for further processing.

Whether you're using Elasticsearch for log aggregation or an AMQP-based system for message-driven workflows, the Pusher feature gives you flexibility in how and where you store or process your health check results.

In this section, we will explore how to configure the **Elasticsearch Pusher** and the **AMQP Messaging Pusher**. These integrations can be crucial for scaling observability or integrating health check data into larger monitoring systems.