"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHY_US_FEATURES } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Marsak
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Strategy Meets Execution — Every Time
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Most agencies hand you a strategy deck. Most consultancies stop at
            recommendations. Marsak does both — we design the roadmap and we
            drive the execution until you see results in the numbers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8192C] text-white font-semibold rounded hover:bg-[#B5121F] transition-colors"
          >
            Work With Us <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {WHY_US_FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-xl"
            >
              <CheckCircle2 size={20} className="text-[#E8192C] shrink-0 mt-0.5" />
              <span className="text-[#1A1A1A] font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
