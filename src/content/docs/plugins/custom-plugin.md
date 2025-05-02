---
title: Custom Plugin
description: Custom Plugin
---

No matter how many plugins a health check library offers out of the box, there's always *that one service*---the one with a quirky API, a custom business logic, or a deeply internal service protocol. That's exactly why **PIHACE** supports **Custom Plugins**: so you can define what "healthy" means in your world.

The **Custom Plugin** concept empowers developers to create tailor-made health checks without sacrificing the convenience of PIHACE's unified architecture. Whether you're pinging an internal microservice, verifying a third-party webhook, or checking a sensor over a serial connection---this is your playground.

And here's the real win: your custom plugin doesn't exist in a vacuum. It integrates seamlessly with **timeouts**, **retries**, **formatters**, **pushers**, **providers**, and **storage**---just like built-in plugins. That means your custom logic gets all the same benefits, reporting power, and observability as any core plugin.

### When to Use

You should create a custom plugin when:

-   Your service or device doesn't have a plugin in PIHACE yet.

-   You need a non-standard health check logic (e.g., check CPU usage from a remote sensor).

-   You want to wrap a proprietary or offline check method (like gRPC ping, shared memory, etc.).

-   You want the output to still flow into Prometheus, ElasticSearch, or a YAML summary---without reinventing the wheel.

### Example
```python
def function_that_mock_failure():
    return (False, "something broke")

def function_that_mock_success():
    return True

healthcheck.register("Mock Fail", function_that_mock_failure)
healthcheck.register("Mock Success", function_that_mock_success)

print(hc.check(output="str"))
```

### Seamless Integration

Despite being custom-built, your plugin can:

-   Respect `timeout` and `retry` logic.

-   Be used with **Pushers** (e.g., send results to a queue or DB).

-   Be exposed by **Providers** (e.g., HTTP/Prometheus).

-   Work with **Storage** backends for persistent health history.

### Tips

-   Keep your health logic lightweight and deterministic---avoid introducing long delays or complex state machines unless necessary.

-   You can use environment variables or config files inside your custom plugin to parameterize behavior.

-   Feel free to wrap third-party SDKs or hardware checks inside your plugin for maximum flexibility.