"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const highlights = [
    { label: "Experience", value: "1+ Year" },
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "15+" },
    { label: "API Latency Reduced", value: "25%" },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">01.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About Me
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Get to know who I am and what drives me as a developer.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative group">
              <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-accent/50 transition-all duration-500">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-surface to-secondary flex items-center justify-center">
                  <Image
                    src="/akash-photo.jpg"
                    alt="Akash Anumolu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I&apos;m <span className="text-text-primary font-medium">Akash Anumolu</span>, a
                Full Stack Developer based in India. I graduated from{" "}
                <span className="text-accent">Vellore Institute of Technology (VIT), Amaravati</span>{" "}
                with a B.Tech in Computer Science (CGPA: 8.16).
              </p>

              <p className="text-text-secondary leading-relaxed">
                Currently working at{" "}
                <span className="text-accent">greenkwh.net</span> as a Full Stack Developer,
                where I build scalable REST APIs in Golang, implement monitoring solutions with
                Grafana & Prometheus, and deploy containerized applications on AWS.
              </p>

              <p className="text-text-secondary leading-relaxed">
                I specialize in building robust backend systems with{" "}
                <span className="text-text-primary font-medium">Golang</span>, creating responsive
                frontends with{" "}
                <span className="text-text-primary font-medium">React & Flutter</span>, and
                managing databases like{" "}
                <span className="text-text-primary font-medium">MongoDB & PostgreSQL</span>. I&apos;m
                passionate about clean architecture, performance optimization, and DevOps practices.
              </p>

              <p className="text-text-secondary leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
                to open-source projects, or mentoring fellow developers.
              </p>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                Download Resume
                <HiDownload size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Highlights */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center glass-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {item.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection delay={0.5} className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 glass-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-accent text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">
                    Optimized API Performance
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Reduced API latency by 25% via Golang optimization and
                    MongoDB indexing, improving overall system responsiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass rounded-xl p-6 glass-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-accent text-lg">🚀</span>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">
                    System Responsiveness
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Improved system responsiveness by 30% by building and
                    integrating scalable REST APIs with optimized architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}