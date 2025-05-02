---
title: Core Concepts
description: Core Concepts
---
At the heart of **PIHACE** is a modular, flexible, and extensible design that allows you to manage health checks across various components and services in your system. The core concept is based on the idea of decoupling each responsibility into its own discrete, pluggable unit, allowing you to **add, remove, or extend functionality** without disrupting your entire health check architecture.

PIHACE's design is **plugin-based**, meaning that every health check can be treated as an independent unit, which you can compose together to form a complete monitoring solution. This approach brings several key advantages, from flexibility to scalability, and enables developers to create their own custom health check logic tailored to their system's needs.

Let's break down the core components of PIHACE:

### 1\. **Plugins** --- The Health Checkers (Your Trustworthy Doctor)

In PIHACE, **Plugins** (formerly called "checkers") are the actual **health checkers**. Think of them as doctors who examine the vital signs of your system. Whether it's checking if your database is up, verifying that an external API is reachable, or ensuring that a service dependency is functioning correctly, plugins do the actual "diagnosis."

Each plugin is an independent, reusable unit, which makes adding new health checks as simple as writing a small function or class. Want to check whether your Redis server is healthy? Just drop in a Redis plugin. Need to verify that your email service is running? You'll find a plugin for that too. The beauty of this plugin-based design is that you can **mix and match** different plugins based on the components you are working with, and you can also easily **replace** a plugin with another if you need to modify your health check logic.

**Why this design?**\
The primary benefit of this approach is **modularity and flexibility**. By isolating health check logic into plugins, you don't have to worry about tangled code or redundant checks. Want to check for database health and ensure that a certain HTTP endpoint is responsive? You can combine plugins, each with its own configuration and logic, without worrying about their internal workings. This makes your codebase cleaner, more maintainable, and scalable.

### 2\. **Providers** --- Data Suppliers (Your On-Demand Server)

In PIHACE, **Providers** are responsible for supplying the necessary data or context to the plugins when requested. Think of providers as the **servers** that respond to data needs. For example, you might have a Prometheus exporter that provides real-time metrics about system health, or an HTTP service that responds with dynamic configuration data.

Providers don't perform the health check themselves --- they **serve the required information** when the plugin requests it. Providers give plugins access to **dynamic inputs** (like credentials, environment variables, or service statuses), which helps them run their checks more effectively. These components are essential when a plugin needs to pull external data to execute its health check. For example, a provider might be responsible for fetching authentication tokens from a service or querying metrics from an API to determine the system's health.

**Why this design?**\
The **provider pattern** decouples the **data supply** from the actual health checking logic. This separation allows for greater flexibility. If your system needs to query data from various sources (like a cloud service, internal database, or external API), you can implement multiple providers and inject them into your plugins as needed. This also promotes reusability: the same provider can be used across different health checks.

### 3\. **Pushers** --- Data Delivery Agents (Your Messenger)

Once a health check is complete, the results need to be delivered somewhere --- whether that's an alerting system, a logging service, or a monitoring dashboard. This is where **Pushers** come in. Pushers are responsible for **sending** the health check results to a specified destination, like ElasticSearch, an AMQP queue, or even a simple HTTP endpoint.

Pushers don't concern themselves with the **details of the health check** --- they only care about forwarding the results. They might push health check results to a monitoring service like Prometheus, log the status in Elasticsearch, or send an alert to an AMQP queue for consumption by another service. This separation allows PIHACE to be integrated into different monitoring ecosystems, giving you the **freedom to send health data wherever it's needed**.

**Why this design?**\
The **pusher** model allows for **decentralized data delivery**. You don't have to hardcode how results are forwarded; you simply choose a pusher that suits your needs. This makes your health check architecture **extensible**. You might start with logging to a file but later switch to sending results to a cloud-based monitoring solution without needing to rewrite your health check logic.

### 4\. **Storage** --- Health Data Repositories (Your Database Worker)

While **Providers** offer data, and **Pushers** deliver results, **Storage** components are tasked with saving and **persisting health data**. Storage interacts directly with databases (SQL, NoSQL, etc.), saving the results of each health check to ensure long-term visibility, audits, or trends. This is not just about responding with data or sending results elsewhere; it's about **storing the actual data** in a persistent manner so you can analyze it later.

For example, you might want to store the results of your health checks in a database for historical trend analysis, or keep track of any failures that occurred over time. Storage plugins are designed to interface directly with databases, providing an efficient way to track and query past health check results.

**Why this design?**\
The **storage pattern** is key when you need to store **persistent health data** over time. It's perfect for cases where trends or historical records of system health are necessary. By keeping storage separate from the plugins, providers, and pushers, you ensure that health data can be **stored independently** and queried in a way that fits your needs. This separation allows the system to remain flexible, where you can update how and where you store health data without disrupting the core health check functionality.