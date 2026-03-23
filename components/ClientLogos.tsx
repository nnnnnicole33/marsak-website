import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientLogos() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
        Trusted by Leading Brands
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-xl font-bold text-gray-300 hover:text-[#E8192C] transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
