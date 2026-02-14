"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">02.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            My professional journey and the impact I&apos;ve made.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.id} delay={index * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-[5px] rounded-full bg-accent shadow-lg shadow-accent/50" />

                  {/* Card */}
                  <div className="glass rounded-xl p-8 glass-hover">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium mt-1">
                          {exp.company}
                        </p>
                        <p className="text-text-muted text-sm mt-1">
                          {exp.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                          {exp.period}
                        </span>
                        <p className="text-text-muted text-sm mt-2">
                          {exp.type}
                        </p>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/5 text-accent text-xs font-mono rounded-md border border-accent/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}