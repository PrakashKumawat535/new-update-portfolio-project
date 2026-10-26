import React, { useState } from "react";
import StarburstIcon from "./StarburstIcon.tsx";

export interface ProjectItem {
  _id?: string;
  title: string;
  category: string;
  description?: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  link?: string;
  techStack?: string[];
}

const projects: ProjectItem[] = [
  {
    title: "TravelMind AI — Travel Itinerary Planner",
    category: "AI MERN STACK",
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
    link: "https://ai-travel-itinerary-planner-pixs.onrender.com/",
  },
  {
    title: "FormVibe — No-Code Dynamic Form Builder",
    category: "SAAS PRODUCT",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://no-code-dynamic-form-builder.onrender.com/",
  },
  {
    title: "ShopMate — QR Review & Billing SaaS",
    category: "BUSINESS AUTOMATION",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "https://shopmate-saas-ai.vercel.app/",
  },
  {
    title: "LocalBoost AI — Social Media Content Generator",
    category: "GENERATIVE AI",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    link: "https://localboostai.vercel.app/",
  },
];

export default function PortfolioSection({ items }: { items?: ProjectItem[] }) {
  const displayProjects = items !== undefined ? items : projects;
  const [previewProject, setPreviewProject] = useState<string | null>(null);
  return (
    <section className="w-full bg-brand-cream border-t border-black py-20 md:py-32 px-6 md:px-12" id="portfolio-section">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28" id="portfolio-header">
          <StarburstIcon points={16} className="w-8 h-8 text-brand-red mb-4" strokeWidth={2.8} />
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-[80px] text-black leading-[1.1] tracking-tighter" id="portfolio-title">
            Portfolio
          </h2>
          <span className="font-display font-black text-xs sm:text-sm tracking-[0.25em] text-neutral-800 uppercase mt-4 block" id="portfolio-subheading">
            SELECTED PROJECTS & PRODUCTION SAAS BUILDINGS
          </span>
        </div>

        {/* Alternating Project List */}
        <div className="flex flex-col gap-20 sm:gap-28 md:gap-36" id="projects-list">
          {displayProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project._id || `${project.title}-${index}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center group text-left"
                id={`portfolio-item-${index}`}
              >
                {/* Image Column */}
                <div className={`col-span-1 md:col-span-6 ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="w-full aspect-[4/3] sm:aspect-[1.33/1] overflow-hidden bg-neutral-100 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className={`col-span-1 md:col-span-6 flex flex-col items-start ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                  {/* Category Badge */}
                  <span className="bg-brand-red text-white font-display font-black text-xs px-3.5 py-1.5 uppercase tracking-widest mb-6 inline-block select-none">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-[44px] text-black leading-[1.1] tracking-tight mb-6 group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.description && <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-5 max-w-xl">{project.description}</p>}
                  {project.techStack?.length ? <div className="flex flex-wrap gap-2 mb-6">{project.techStack.slice(0, 6).map((tech) => <span key={tech} className="border border-black/20 px-2 py-1 text-[10px] uppercase tracking-wider">{tech}</span>)}</div> : null}
                  <div className="flex flex-wrap gap-4">
                    {(project.liveUrl || project.link) && <>
                      <a href={project.liveUrl || project.link} target="_blank" rel="noopener noreferrer" className="font-display font-black text-sm tracking-wide text-black border-b-2 border-black pb-0.5 hover:text-brand-red hover:border-brand-red transition-all duration-300">Open Live Site ↗</a>
                      <button type="button" onClick={() => setPreviewProject(previewProject === (project._id || project.title) ? null : (project._id || project.title))} className="font-display font-black text-sm tracking-wide text-black border-b-2 border-black pb-0.5 hover:text-brand-red hover:border-brand-red transition-all duration-300">{previewProject === (project._id || project.title) ? 'Close Preview −' : 'Preview Here +'}</button>
                    </>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-display font-black text-sm tracking-wide text-black border-b-2 border-black pb-0.5 hover:text-brand-red hover:border-brand-red transition-all duration-300">GitHub ↗</a>}
                  </div>
                </div>
                {previewProject === (project._id || project.title) && (project.liveUrl || project.link) && <div className="col-span-1 md:col-span-12 border border-black bg-white p-3 sm:p-4"><p className="mb-3 text-xs font-bold text-neutral-600">Embedded preview — some external sites block iframe previews. If it does not load, use Open Live Site.</p><iframe title={`${project.title} live preview`} src={project.liveUrl || project.link} loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-forms allow-popups" className="h-[420px] w-full border border-neutral-300 bg-white sm:h-[560px]" /></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

