"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container-custom mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Akash Anumolu
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Full Stack Developer | Building Scalable Systems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["About", "Experience", "Projects", "Blog", "Contact"].map(
                (link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/akash-anumolu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/akash-anumolu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:akashanumolu@gmail.com"
                className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
              >
                <HiMail size={18} />
              </a>
              <a
                href="https://wa.me/919100226642"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-text-secondary hover:text-green-400 hover:border-green-400/50 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-text-muted text-sm">
            © {currentYear} Akash Anumolu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}