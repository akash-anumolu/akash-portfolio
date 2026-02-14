"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { blogs } from "@/data/blogs";
import { HiArrowRight, HiClock, HiCalendar } from "react-icons/hi";

export default function Blog() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">06.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Blog
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Thoughts, learnings, and insights from my journey as a developer.
          </p>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <AnimatedSection key={blog.id} delay={index * 0.1}>
              <Link href={`/blog/${blog.slug}`}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-xl overflow-hidden glass-hover h-full flex flex-col group cursor-pointer"
                >
                  {/* Gradient Top Bar */}
                  <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-blue-300" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-text-muted text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <HiCalendar size={14} />
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiClock size={14} />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-accent/5 text-accent text-xs font-mono rounded border border-accent/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 mt-4 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Read More
                      <HiArrowRight size={16} />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* No blogs message (if empty) */}
        {blogs.length === 0 && (
          <AnimatedSection className="mt-16 text-center">
            <div className="glass rounded-xl p-12 max-w-lg mx-auto">
              <p className="text-6xl mb-4">✍️</p>
              <h3 className="text-text-primary font-bold text-xl mb-2">
                Coming Soon
              </h3>
              <p className="text-text-secondary">
                I&apos;m working on some exciting blog posts. Stay tuned!
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}