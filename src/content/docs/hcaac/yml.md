---
title: YML Guide
description: YML Guide
---

So, you've heard the promise: *"Just a little YAML and you're good to go!"* But what exactly goes into that config? And how does it translate into an actual health check system?

Welcome to the heart of HCaaC --- the YAML configuration.

This page will walk you through the structure, intention, and behavior of each section in a PIHACE YAML file, so you can write your first config file with confidence and clarity.

Let's begin.

* * * * *

### 🧠 The Intuition Behind the YAML

The YAML in PIHACE is not just a file --- it's the **blueprint for your health monitoring logic**. Instead of hardcoding each plugin or output format, you describe everything declaratively.

PIHACE reads this file like a recipe:

-   It knows *what to check* (plugins),

-   *How to share it* (providers),

-   *Where to send it* (pushers),

-   And *Where to store it* (storage).

You're not writing logic --- you're **declaring intent**. PIHACE takes care of wiring up the system behind the scenes.

* * * * *

### 🧩 Full Example

Let's look at a real-world YAML file:

```yaml

instance:
    name: example-api
    version: 0.1.0
    with_system: true

plugin:
  - name: MySQL A
    type: mysql
    dsn: "mysql://root:root@localhost:3306/mydb"
    timeout: 5
    retries: 2

  - name: MongoDB B
    type: mongodb
    dsn: "mongodb://localhost:27017"

  - name: InfluxDB C
    type: influxdb
    url: "http://localhost:8086"
    token: "admintoken"
    org: "myorg"

  - name: External HTTP D
    type: http
    url: "https://example.com"

provider:
  - type: http
    port: 8000

pusher:
  - type: amqp
    url: "amqp://guest:guest@localhost:5672"
    queue: health-data

storage:
  - type: mongodb
    dsn: "mongodb://localhost:27017"

```

This single file describes a complete, operational health check system:

-   **4 services** to monitor.

-   **1 provider** that exposes the results over HTTP.

-   **1 pusher** to publish to a message queue.

-   **1 storage** to save the result history in a MongoDB instance.

All without a single line of code.

* * * * *

### 🔍 Section by Section Breakdown

#### instance

These fields are optional but useful for metadata:

```yaml
instance:
    name: example-api
    version: 0.1.0
    with_system: true
```

They help you track and version your health checks --- especially when used in CI/CD or across teams.

* * * * *

#### `plugin`

The core of your health system. Each plugin defines a check:

```yaml
plugin:
  - name: MySQL A
    type: mysql
    dsn: "mysql://root:root@localhost:3306/mydb"
```

Each plugin can include:

-   `name`: Human-readable label (used in results).

-   `type`: Plugin type (`mysql`, `mongodb`, `http`, etc.).

-   Other parameters based on the plugin type: e.g., `dsn`, `url`, `timeout`, `retries`, `token`.

Plugins are **independent**. You can register as many as needed, and they will be checked in parallel by the engine.

* * * * *

#### `provider`

This section makes your health data **available to the outside world**.

```yaml
provider:
  - type: http
    port: 8000
```
Available providers include:

-   `http`: Serve a live health report.

-   `prometheus`: Expose metrics in Prometheus format.

You can even combine them. Just list them together in the array.

* * * * *

#### `pusher`

Pushers send the health check result to **external systems**, like loggers, queues, or indexing services.

```yaml
pusher:
  - type: amqp
    url: "amqp://guest:guest@localhost:5672"
    queue: health-data
```
This is ideal for event-driven systems that want to *react* to changes in service health. You can add more than one.

* * * * *

#### `storage`

Storage modules are used to **persist health check results** into a database.

```yaml
`storage:
  - type: mongodb
    dsn: "mongodb://localhost:27017"
```

Unlike providers (which just respond) or pushers (which only send), storages **directly write into databases**.

* * * * *

### 🛠️ Tips for Writing YAML by Hand

-   Use **2-space indentation** (not tabs) --- YAML is whitespace-sensitive.

-   Keep values like `dsn` or `url` in **quotes**.

-   Avoid trailing commas or brackets --- this isn't JSON.

-   Use `#` for comments to annotate your setup.

-   If you're stuck, **start small**: define one plugin and one provider, then build incrementally.

* * * * *

### 🔮 What's Coming Next?

Eventually, you'll be able to split large YAML files into components, use environment variables, or even dynamically reload them at runtime. But for now, the format is flat, clean, and perfect for almost any monitoring need.

* * * * *

### ✅ Final Word

HCaaC is about reclaiming your time and sanity. YAML is your new control panel: lightweight, readable, and expressive. Once you get the hang of it, you'll wonder why you ever did it the old way.

So go ahead: open up your editor, write your first config, and breathe easy---your system is about to get a whole lot healthier.