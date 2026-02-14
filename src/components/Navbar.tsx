"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
    });
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-primary/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
      {/* Logo */}
{/* Logo Only */}
<Link href="/" className="flex items-center group">
  <Image
    src="/logoo.png"
    alt="Akash Anumolu Logo"
    width={68}
    height={68}
    className="rounded-xl group-hover:scale-110 transition-transform duration-300"
    priority
  />
</Link>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                pathname === link.path
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Resume Button (Desktop) */}
        <a
          href="/resume.pdf"
          download
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-primary p-2 rounded-lg hover:bg-surface transition-colors"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border/50"
          >
            <div className="container-custom mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      pathname === link.path
                        ? "text-accent bg-accent/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}