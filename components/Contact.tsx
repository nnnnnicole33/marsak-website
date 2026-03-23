"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Whether you have a specific project in mind or just want to explore
            what&apos;s possible, we&apos;d love to hear from you. Our team typically
            responds within 24 hours.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E8192C] flex items-center justify-center">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                hello@marsak.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E8192C] flex items-center justify-center">
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-gray-700 font-medium">+1 (555) 000-1234</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E8192C] flex items-center justify-center">
                <MapPin size={16} className="text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                New York · London · Shanghai
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#FFF5F6] flex items-center justify-center mb-4">
                <Send size={28} className="text-[#E8192C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for reaching out. We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8192C] transition-colors"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8192C] transition-colors"
                    placeholder="Johnson"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8192C] transition-colors"
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8192C] transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#E8192C] text-white font-semibold rounded-lg hover:bg-[#B5121F] transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
