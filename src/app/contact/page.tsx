"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS Integration
      // Replace with your EmailJS credentials
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID",       // Replace
          template_id: "YOUR_TEMPLATE_ID",     // Replace
          user_id: "YOUR_PUBLIC_KEY",           // Replace
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail size={20} />,
      label: "Email",
      value: "akashanumolu@gmail.com",
      href: "mailto:akashanumolu@gmail.com",
    },
    {
      icon: <HiPhone size={20} />,
      label: "Phone",
      value: "+91-9100226642",
      href: "tel:+919100226642",
    },
    {
      icon: <HiLocationMarker size={20} />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/akash-anumolu",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/akash-anumolu",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/919100226642",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">07.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Drop me a message!
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact Details */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass rounded-xl p-5 glass-hover"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-text-primary font-medium text-sm group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-text-primary font-medium text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-text-muted text-sm mb-4 font-medium uppercase tracking-wider">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-text-secondary ${social.color} glass-hover transition-all duration-300 hover:-translate-y-1`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919100226642?text=Hi%20Akash!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-primary border border-border/50 rounded-lg text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-primary border border-border/50 rounded-lg text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-text-secondary text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 bg-primary border border-border/50 rounded-lg text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-secondary text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or how we can work together..."
                  className="w-full px-4 py-3 bg-primary border border-border/50 rounded-lg text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane size={18} className="rotate-90" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                >
                  <HiCheckCircle size={20} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                >
                  <HiExclamationCircle size={20} />
                  Failed to send message. Please try again or contact me
                  directly.
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}