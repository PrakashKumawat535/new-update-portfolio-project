import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

export interface ServiceItem {
  _id?: string;
  num?: string;
  title: string;
  description: string;
  skills: string[];
}

export const defaultServices: ServiceItem[] = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Creating robust, highly performant end-to-end web applications with custom APIs, secure authorization, and modern reactive frontends.",
    skills: ["React.js", "Node.js", "Express.js", "MERN Stack"],
  },
  {
    num: "02",
    title: "AI & Modern Dev Tools",
    description: "Hands-on experience with modern AI tools including Google Gemini, OpenAI, Claude AI, and prompt engineering. I actively use Cursor AI, GitHub Copilot, and Windsurf to improve productivity, automate workflows, and build AI-powered business applications.",
    skills: ["Google Gemini", "OpenAI ChatGPT / Codex", "Claude AI", "Cursor / Copilot / Windsurf"],
  },
  {
    num: "03",
    title: "Database & Cloud Architecture",
    description: "Structuring robust database models, building secure schemas, and configuring smooth cloud hosting and deployment services.",
    skills: ["MongoDB", "Supabase", "MySQL", "Vercel & Render"],
  },
  {
    num: "04",
    title: "WordPress & CMS Customization",
    description: "Developing custom business websites using WordPress, Elementor, and custom style additions with end-to-end hosting configuration.",
    skills: ["WordPress", "Elementor", "Theme Customization", "Lead Generation"],
  },
];

export default function ServicesSection({ items }: { items?: ServiceItem[] }) {
  const displayServices = items !== undefined ? items.map((item, index) => ({ ...item, num: item.num || String(index + 1).padStart(2, "0"), skills: item.skills || [] })) : defaultServices;
  return (
    <section className="w-full bg-[#111111] text-white border-t border-black py-20 md:py-28 px-6 md:px-12" id="services-section">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6" id="services-header">
          <div>
            <div className="flex items-center gap-2 mb-3" id="services-subheading">
              <span className="font-display font-black text-sm tracking-wider text-neutral-400 uppercase">
                WHAT I DO
              </span>
              <StarburstIcon points={8} className="w-4 h-4 text-brand-red animate-pulse" strokeWidth={3.5} />
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none tracking-tighter uppercase" id="services-title">
              My Premium<br />Services.
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-base md:text-lg max-w-sm md:text-right leading-relaxed" id="services-desc">
            Combining engineering rigor and full-stack expertise to build high-performance, secure, and intelligent web systems.
          </p>
        </div>

        {/* Services Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800" id="services-grid">
          {displayServices.map((service, index) => (
            <div 
              key={index}
              className="bg-[#111111] p-8 sm:p-12 md:p-14 flex flex-col justify-between group hover:bg-neutral-900 transition-colors duration-300 relative"
              id={`service-block-${index}`}
            >
              {/* Top Row: Number & Icon */}
              <div className="flex justify-between items-center mb-8" id={`service-top-${index}`}>
                <span className="font-display font-black text-4xl sm:text-5xl text-brand-red group-hover:scale-105 transition-transform duration-300">
                  {service.num}
                </span>
                <StarburstIcon 
                  points={8} 
                  className="w-6 h-6 text-neutral-700 group-hover:text-brand-red group-hover:rotate-45 transition-all duration-500" 
                  strokeWidth={3} 
                />
              </div>

              {/* Service Title & Info */}
              <div id={`service-main-${index}`}>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Skills/Tags Row */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-800/60" id={`service-tags-${index}`}>
                {service.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
