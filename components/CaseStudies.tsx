"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A]">
            Our Work Speaks
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Real results from real engagements. Here&apos;s how we&apos;ve moved the needle
            for clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Color cover */}
              <div
                className="h-44 flex items-center justify-center"
                style={{ backgroundColor: cs.color }}
              >
                <ArrowUpRight
                  size={48}
                  className="text-white/40 group-hover:text-white/80 transition-colors"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E8192C] bg-[#FFF5F6] px-2 py-1 rounded">
                  {cs.tag}
                </span>
                <h3 className="mt-4 text-[#1A1A1A] font-bold leading-snug">
                  {cs.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="font-bold text-[#E8192C] text-base">
                    {cs.result}
                  </span>
                  <span>{cs.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#E8192C] text-[#E8192C] font-semibold rounded hover:bg-[#FFF5F6] transition-colors"
          >
            View All Cases <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
