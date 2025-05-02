---
title: Overview
description: Overview
---
In a world where services speak to each other more than to their developers, **providers** are the messengers --- the ones who answer the call when someone asks:

> *"Hey, how healthy are you today?"*

In the PIHACE ecosystem, **Providers** act as **the outward-facing endpoints** of your health check system. They **do not generate health data**, nor do they **store it**. Instead, their purpose is simple but powerful:

> 💬 **When someone asks for health info --- Providers respond.**

Whether it's your DevOps team curling an endpoint, your frontend querying uptime, or your Prometheus scraper pinging for metrics, providers ensure that **your system's internal health becomes externally visible** --- cleanly, efficiently, and reliably.

## Why Providers Matter

Let's face it --- a health check system that hides its results is like a fire alarm with no sound. Sure, it might be checking everything correctly, but if no one can see the outcome, what's the point?

Providers make the health check results:

-   🔎 **Observable** for humans and machines.

-   📡 **Shareable** with dashboards, monitoring stacks, and alerting tools.

-   ⚙️ **Composable** with infrastructure that expects health endpoints (e.g., Kubernetes, Traefik, AWS ALBs, etc.).

They are your system's health spokespersons.


## How They Work

In PIHACE, Providers run as **standalone lightweight services** (like HTTP servers) or integrate with existing ecosystems (like Prometheus). Once configured --- either via code or YAML --- they automatically expose the results of all registered plugins, formatted as needed.

Under the hood:

-   🏁 They **wait for incoming requests**.

-   📦 On request, they **gather and format health data** from plugins.

-   🎁 Then, they **respond in a standardized format** (JSON, Prometheus metrics, etc.).

This makes them a key building block in CI/CD pipelines, auto-healing environments, and zero-downtime deployments.



## Types of Providers in PIHACE


Currently, PIHACE supports:

### Web Service (HTTP) Provider

A lightweight HTTP server that serves real-time health check results --- great for APIs, cloud deployments, and load balancers.

### Prometheus Provider

Exports health metrics in Prometheus-compatible format, perfect for observability pipelines and Grafana dashboards.

More provider types may be introduced in the future to support gRPC, WebSocket, or even CLI-based querying.


## So, what?

Providers are where your silent health-checking logic finally finds its voice. They're easy to configure, lightweight to run, and critical for real-world system observability. Once you plug them in, you turn your health checks from silent watchers into **active communicators**.

Now, let's take a look at how to implement specific providers, starting with the classic: the **Web Service Provider**.