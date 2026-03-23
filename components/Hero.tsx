"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFF5F6] -skew-x-6 origin-top-right" />
      <div className="absolute top-0 left-0 w-2 h-48 bg-[#E8192C]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF5F6] border border-[#E8192C]/20 rounded-full text-[#E8192C] text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
            {HERO.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6"
          >
            We Help Businesses{" "}
            <span className="text-[#E8192C]">Grow Smarter</span> and Faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8192C] text-white font-semibold rounded hover:bg-[#B5121F] transition-colors"
            >
              {HERO.cta_primary}
              <ArrowRight size={16} />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#E8192C] text-[#E8192C] font-semibold rounded hover:bg-[#FFF5F6] transition-colors"
            >
              {HERO.cta_secondary}
            </a>
          </motion.div>
        </div>

        {/* Right — abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#E8192C]/20" />
            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border-2 border-[#E8192C]/40" />
            {/* Center */}
            <div className="absolute inset-16 rounded-full bg-[#E8192C] flex items-center justify-center">
              <span className="text-white text-5xl font-bold">M</span>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-xl px-4 py-3 text-sm font-semibold text-[#1A1A1A]">
              📈 +340% Growth
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl px-4 py-3 text-sm font-semibold text-[#1A1A1A]">
              ⭐ 98% Satisfaction
            </div>
            <div className="absolute top-1/2 -right-12 bg-[#E8192C] shadow-lg rounded-xl px-4 py-3 text-sm font-semibold text-white">
              500+ Clients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
