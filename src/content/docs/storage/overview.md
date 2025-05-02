---
title: Overview
description: Overview
---

In modern applications, maintaining accurate and accessible records of your system’s health is crucial. While monitoring solutions provide real-time visibility, having a permanent storage solution allows for historical analysis, trend tracking, and audit purposes. With PIHACE, the Storage component serves this purpose by providing an interface to directly store health check results in a database.

The Storage feature in PIHACE allows you to persist your health check data in a database for later use, enabling you to analyze your system’s health over time. Unlike providers, which simply respond with health data, or pushers, which send the data elsewhere, storage components directly interact with the database, ensuring your health check results are securely stored and retrievable.

### Why Use Storage?
Historical Analysis: Storing health data in a database allows you to track the status of your services over time. You can then analyze trends, identify recurring issues, or spot gradual declines in service performance.

Audit and Compliance: For many industries, keeping records of system health checks is a requirement. Storing this data provides an auditable trail of your application’s operational history.

Reliability: By storing health data, you ensure that even if your monitoring system or live data disappears, you still have a reliable record of past health data.

Seamless Integration: The Storage component can integrate easily with other features like Pushers and Providers, creating a full-stack health monitoring system that stores and processes data.

### Types of Storage in PIHACE
The Storage component is flexible, supporting various backends depending on your infrastructure and requirements. In this section, we’ll explore the MongoDB Storage option in more detail.

By using the MongoDB Storage, you can easily store health check results in a NoSQL database that’s designed for scalability and high availability.