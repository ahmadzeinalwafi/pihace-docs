---
title: Overview
description: Overview
---

If you've ever set up health checks manually across multiple services, you probably know the pain: writing repetitive logic, figuring out timeouts, plugging into different libraries, and still not having a unified output. Then come the edge cases. One day you're checking a database; the next, you're testing a webhook; soon, you're writing a whole new health framework just to meet basic needs.

It shouldn't be this difficult to know whether your system is alive.

This is the exact frustration that led to the creation of **HCaaC --- HealthCheck as a Config**. It's a philosophy baked into PIHACE, designed around a simple but powerful idea: **you shouldn't have to write code to define health**.

Instead, what if you could describe your services, behaviors, and expectations in a small, clear YAML file---and let the system figure out the rest? No more glue code. No more boilerplate. Just declarative, reusable configuration that instantly powers everything from HTTP endpoints to Prometheus exporters, AMQP queues, or direct database writes.

Picture this: you're deploying a web app that connects to MySQL, ElasticSearch, and an external API. You want to monitor all of these, push the results to a message queue, and expose a Prometheus endpoint. You could write dozens of lines of Python---or you could write a **20-line config** and plug it into PIHACE. That's HCaaC in action.

This configuration-driven approach is a mindset shift. It treats health checks the way modern DevOps treats infrastructure: **as code, versionable, portable, and reviewable**. Anyone in your team---developer or ops---can open a config file and instantly understand what services are being checked, what thresholds are in place, and where the results are going.

But HCaaC goes further. It's not just about reducing developer effort. It's about **connectivity**. The same YAML file powers:

-   The **Plugins**, which act as smart doctors running specific checks.

-   The **Providers**, which expose health data through HTTP or Prometheus.

-   The **Pushers**, which send results into external systems like AMQP or Kafka.

-   And the **Storage**, which archives health reports in a persistent database like MongoDB or InfluxDB.

Everything you define in one place becomes usable across the whole PIHACE ecosystem---automatically.

And it's modular. Want to monitor five services in production but only two in staging? You can swap config files. Want to send results to both ElasticSearch and RabbitMQ during peak load? Just add both under the `pusher` section. The entire behavior of your health check system is now configurable---**no redeploys needed, no code changes, no stress**.

For teams managing large-scale infrastructure, HCaaC becomes a superpower. It lets you scale your observability with confidence, knowing your health check logic is consistent, portable, and future-proof. For solo developers or small teams, it's a time-saver---a way to gain best-in-class monitoring with just a few lines of config.

Ultimately, HCaaC embodies what PIHACE is really about: **turning health checks from an afterthought into a first-class citizen** of your software system. Whether you're checking if a service is alive, exposing that data to dashboards, or reacting to it in pipelines---HCaaC gives you the freedom to define everything in a single, elegant file.

So go ahead: start small. A few lines of YAML. A couple of plugins. One provider. Before long, you'll realize you've built a production-grade health check platform without ever opening your editor.

And that's the magic of HCaaC.
