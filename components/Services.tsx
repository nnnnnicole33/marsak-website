"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Megaphone,
  HeartHandshake,
  BarChart2,
  LineChart,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Megaphone: <Megaphone size={28} />,
  HeartHandshake: <HeartHandshake size={28} />,
  BarChart2: <BarChart2 size={28} />,
  LineChart: <LineChart size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A]">
            Full-Spectrum Growth Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From high-level strategy to hands-on execution, we cover every lever
            of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* top accent border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8192C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

              <div className="w-14 h-14 rounded-xl bg-[#FFF5F6] flex items-center justify-center text-[#E8192C] mb-6">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
