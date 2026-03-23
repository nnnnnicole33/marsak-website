"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { TEAM } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E8192C] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="text-4xl font-bold text-[#1A1A1A]">Meet the Team</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Senior practitioners who have led growth at some of the world&apos;s most
            ambitious companies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#E8192C] to-[#B5121F] flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-105 transition-transform">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm">
                {member.name}
              </h3>
              <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              <a
                href="#"
                className="inline-flex justify-center mt-2 text-gray-400 hover:text-[#E8192C] transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
