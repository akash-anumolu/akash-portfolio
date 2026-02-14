"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">04.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Technologies and tools I use to build great products.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.id} delay={catIndex * 0.1}>
              <div className="glass rounded-xl p-6 glass-hover h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-text-muted text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-primary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}