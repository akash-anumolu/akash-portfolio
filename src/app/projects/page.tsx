"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">03.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Projects
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            A selection of projects I&apos;ve built that showcase my skills and
            problem-solving abilities.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl overflow-hidden glass-hover h-full flex flex-col"
              >
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent transition-colors duration-300"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-accent/70 text-xs font-mono mb-3">
                    {project.year}
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-text-muted text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <a
            href="https://github.com/akash-anumolu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/5 transition-all duration-300"
          >
            <FaGithub size={20} />
            View More on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}