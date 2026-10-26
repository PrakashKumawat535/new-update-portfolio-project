import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface ArticleItem {
  date: string;
  category: string;
  title: string;
  readTime: string;
}

const articles: ArticleItem[] = [
  {
    date: "July 04, 2024",
    category: "Full Stack",
    title: "How I Built a No-Code Dynamic Form Builder with React 19 and Express.js",
    readTime: "7 min read",
  },
  {
    date: "June 18, 2024",
    category: "Generative AI",
    title: "Deep Dive into Google Gemini AI Integration for MERN Stack Applications",
    readTime: "10 min read",
  },
  {
    date: "May 02, 2024",
    category: "SaaS Dev",
    title: "Designing QR-Based Automated Billing Systems for Local Businesses",
    readTime: "6 min read",
  },
];

export default function ArticlesSection() {
  return (
    <section className="w-full bg-brand-cream border-t border-black py-20 md:py-28 px-6 md:px-12" id="articles-section">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6" id="articles-header">
          <div>
            <div className="flex items-center gap-2 mb-3" id="articles-subheading">
              <span className="font-display font-black text-sm tracking-wider text-black uppercase">
                LATEST ARTICLES
              </span>
              <StarburstIcon points={8} className="w-4 h-4 text-brand-red animate-pulse" strokeWidth={3.5} />
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-black leading-none tracking-tighter uppercase" id="articles-title">
              My Articles.
            </h2>
          </div>
          <p className="font-sans text-neutral-600 text-base md:text-lg max-w-sm md:text-right leading-relaxed" id="articles-desc">
            Sharing technical insights, tutorials, and deep-dives on full-stack development, AI integrations, and responsive systems.
          </p>
        </div>

        {/* Articles List */}
        <div className="border-t border-black flex flex-col" id="articles-list">
          {articles.map((art, index) => (
            <div 
              key={index}
              className="group border-b border-black py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6 hover:bg-[#111111] hover:text-white transition-all duration-300 px-2 sm:px-6 cursor-pointer"
              id={`article-row-${index}`}
            >
              {/* Date & Metadata */}
              <div className="md:col-span-2 flex flex-col gap-1.5" id={`article-meta-${index}`}>
                <span className="font-sans text-xs uppercase tracking-widest text-neutral-500 group-hover:text-brand-red transition-colors font-semibold">
                  {art.category}
                </span>
                <span className="font-sans text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-400 font-medium">
                  {art.date}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-8">
                <h3 className="font-display font-black text-xl sm:text-2xl md:text-[26px] tracking-tight text-black group-hover:text-white transition-colors leading-snug">
                  {art.title}
                </h3>
              </div>

              {/* Read Time & Arrow */}
              <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4" id={`article-action-${index}`}>
                <span className="font-sans text-xs uppercase tracking-wider text-neutral-400 group-hover:text-neutral-300 font-bold">
                  {art.readTime}
                </span>
                
                {/* Visual Arrow Indicator */}
                <div className="w-9 h-9 border border-black group-hover:border-white rounded-none flex items-center justify-center bg-transparent group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <span className="font-sans font-bold text-base transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
