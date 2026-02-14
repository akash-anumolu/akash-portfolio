export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "building-scalable-apis-with-golang",
    title: "Building Scalable APIs with Golang",
    excerpt:
      "A deep dive into building high-performance REST APIs using Golang's Echo framework with best practices for production.",
    content: `
## Introduction

Building scalable APIs is crucial for modern applications. In this post, I'll share my experience building production-grade REST APIs with Golang.

## Why Golang?

Golang's concurrency model, fast compilation, and excellent standard library make it a top choice for backend development.

## Key Takeaways

- Use middleware for authentication and logging
- Implement proper error handling
- Structure your project with clean architecture
- Always write tests for critical paths

## Conclusion

Golang continues to be my go-to language for backend development. Its simplicity and performance make it ideal for building scalable systems.
    `,
    date: "2025-01-15",
    readTime: "5 min read",
    tags: ["Golang", "API", "Backend"],
  },
  {
    id: 2,
    slug: "docker-for-developers",
    title: "Docker for Developers: A Practical Guide",
    excerpt:
      "Learn how to containerize your applications with Docker and streamline your development workflow.",
    content: `
## Introduction

Docker has revolutionized how we develop, ship, and run applications. Here's my practical guide for developers.

## Getting Started

Understanding Docker images, containers, and volumes is the foundation of containerization.

## Best Practices

- Use multi-stage builds
- Keep images small
- Use .dockerignore
- Never store secrets in images

## Conclusion

Docker is an essential tool in every developer's toolkit. Start small and gradually containerize your entire stack.
    `,
    date: "2025-01-05",
    readTime: "7 min read",
    tags: ["Docker", "DevOps", "Deployment"],
  },
  {
    id: 3,
    slug: "monitoring-iot-with-grafana",
    title: "Monitoring IoT Systems with Grafana & Prometheus",
    excerpt:
      "How I built real-time monitoring dashboards for 300+ IoT devices using Grafana and Prometheus.",
    content: `
## Introduction

Monitoring IoT devices at scale requires robust tooling. Here's how I implemented monitoring for 300+ battery devices.

## The Stack

- Prometheus for metrics collection
- Pushgateway for batch jobs
- Grafana for visualization

## Results

The monitoring system reduced incident response time by 60% and provided real-time visibility into device health.

## Conclusion

Investing in monitoring infrastructure pays dividends in system reliability and operational efficiency.
    `,
    date: "2024-12-20",
    readTime: "6 min read",
    tags: ["IoT", "Grafana", "Prometheus", "Monitoring"],
  },
];