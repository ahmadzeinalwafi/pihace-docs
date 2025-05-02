---
title: Overview
description: Overview
---

In PIHACE, **Plugins** are at the heart of the health check system. Think of them as little health professionals---each one uniquely trained to diagnose a specific type of system or service. Whether you're dealing with databases, APIs, or third-party services, plugins allow you to "plug in" and perform precise health diagnostics without reinventing the wheel.

We designed plugins to be modular, composable, and reusable, so you don't have to spend hours writing repetitive checks from scratch. Instead, you just bring your service's connection details, select the appropriate plugin, register it in your health checker---and voilà! You've just empowered your system with a reliable way to monitor one of its many lifelines.

### Why Plugins Matter

In any real-world software system, especially those that lean toward microservices or distributed architecture, monitoring the health of each component is non-negotiable. A slow or downed database, an unreachable API, or even a misconfigured storage bucket can quietly introduce massive delays or failures.

By using plugins, you ensure:

-   🔌 **Pluggability**: Add or remove checks without changing the entire health check pipeline.

-   ⚙️ **Consistency**: Standardized health check logic with customizable behavior.

-   📦 **Extensibility**: Create custom plugins for your specific needs with minimal effort.

### What You'll Find in This Section

In this Plugin section, we'll explore a variety of built-in and custom plugin types that PIHACE supports. We'll show you how to configure them, register them into the system, and interpret the results they produce.

Here are the plugin types we will cover:

-   **MySQL**: Check the availability of a MySQL database using standard connection parameters.

-   **MongoDB**: Validate connectivity and responsiveness of MongoDB services.

-   **InfluxDB**: Ensure your time-series database is reachable and authenticated correctly.

-   **ElasticSearch**: Monitor search engine availability and cluster status.

-   **Custom Plugin**: Learn how to write your own plugins for systems not covered by built-ins --- because no one knows your infrastructure like you do.

> 📌 *Note: Each plugin is designed to operate independently, which means you can register as many different services as you want --- even different instances of the same type of service!*

We hope this section not only helps you implement robust health monitoring, but also sparks ideas on how to build more resilient, self-aware systems.

Let's dive in and explore each plugin one by one.
