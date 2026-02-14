"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">05.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Education
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            My academic background and qualifications.
          </p>
        </AnimatedSection>

        {/* Education Card */}
        <div className="mt-16 max-w-3xl">
          <AnimatedSection delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-8 glass-hover relative overflow-hidden"
            >
              {/* Accent Stripe */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent to-accent-light rounded-l-xl" />

              <div className="pl-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  2021 – 2025
                </div>

                {/* University */}
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Vellore Institute of Technology (VIT)
                </h2>
                <p className="text-accent font-medium text-lg mb-1">
                  Amaravati Campus
                </p>
                <p className="text-text-muted text-sm mb-6">
                  Guntur, Andhra Pradesh, India
                </p>

                {/* Degree Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass rounded-lg p-5">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                      Degree
                    </p>
                    <p className="text-text-primary font-semibold">
                      B.Tech in Computer Science
                    </p>
                  </div>
                  <div className="glass rounded-lg p-5">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                      CGPA
                    </p>
                    <p className="text-text-primary font-semibold text-2xl">
                      8.16
                      <span className="text-text-muted text-sm font-normal">
                        {" "}
                        / 10
                      </span>
                    </p>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className="mt-8">
                  <h3 className="text-text-primary font-semibold mb-4">
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Operating Systems",
                      "Database Management",
                      "Computer Networks",
                      "Software Engineering",
                      "Web Development",
                      "Object Oriented Programming",
                      "System Design",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-accent/5 text-text-secondary text-xs font-mono rounded-md border border-accent/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}