"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A]">
            Our Proven Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A repeatable, results-driven framework we&apos;ve refined across hundreds
            of engagements.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0" />

          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-[#E8192C] flex items-center justify-center mb-6 shadow-sm">
                <span className="text-[#E8192C] text-xl font-bold">
                  {step.step}
                </span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
