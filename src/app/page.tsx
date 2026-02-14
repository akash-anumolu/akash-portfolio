"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowRight } from "react-icons/hi";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary mb-4"
          >
            Akash Anumolu
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            <TypeWriter
              words={[
                "Full Stack Developer",
                "Building Scalable Systems",
                "Golang Enthusiast",
                "DevOps Practitioner",
              ]}
              className="text-gradient"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl"
          >
            I build robust, scalable backend systems and beautiful frontend
            experiences. Specializing in Golang, React, and Flutter with a
            passion for clean architecture and DevOps practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-border hover:border-accent/50 text-text-primary font-medium rounded-lg transition-all duration-300 hover:bg-surface"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-text-muted text-sm">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex gap-3">
              <a
                href="https://github.com/akash-anumolu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface/50 border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/akash-anumolu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface/50 border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:akashanumolu@gmail.com"
                className="w-10 h-10 rounded-lg bg-surface/50 border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <HiMail size={18} />
              </a>
              <a
                href="https://wa.me/919100226642"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface/50 border border-border/50 flex items-center justify-center text-text-secondary hover:text-green-400 hover:border-green-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}