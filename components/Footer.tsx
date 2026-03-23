import { Linkedin, Twitter, Instagram } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    "Strategic Consulting",
    "Digital Marketing",
    "Brand Advertising",
    "Customer Success",
    "Market Research",
    "Growth Analytics",
  ],
  Company: ["About Us", "Case Studies", "Our Team", "Careers", "Press"],
  Contact: [
    "hello@marsak.com",
    "+1 (555) 000-1234",
    "New York",
    "London",
    "Shanghai",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-[#E8192C] block mb-4">
              MARSAK
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Helping ambitious companies grow smarter through consulting,
              marketing, and customer success.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8192C] transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8192C] transition-colors"
              >
                <Twitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8192C] transition-colors"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-[#E8192C] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Marsak. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E8192C] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E8192C] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
