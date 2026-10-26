import React from "react";
import { motion } from "motion/react";
import StarburstIcon from "./StarburstIcon.tsx";

interface AboutSectionProps {
  onClose?: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  // We repeat the text list multiple times to fill up more than 200% screen width for a seamless loop
  const marqueeItems = [
    "React.js",
    "Node.js",
    "TypeScript",
    "MERN Stack",
    "Google Gemini",
    "MongoDB",
    "Express.js",
    "WordPress",
  ];

  // Let's create a single concatenated track of text items to repeat twice in the track
  const trackItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full bg-brand-cream relative overflow-hidden" id="about-section">
      
      {/* 1. Tilted Infinite Marquee Bar Container */}
      <div className="w-full py-16 md:py-24 overflow-hidden relative select-none" id="marquee-bar-container">
        {/* We tilt the container by -2.5 degrees and scale slightly so the edges extend past the screen boundaries */}
        <div 
          className="bg-[#111111] py-5 sm:py-6 md:py-7 transform -rotate-[2.3deg] scale-[1.04] shadow-md border-y border-black/10 overflow-hidden flex items-center"
          id="slanted-marquee"
        >
          <div className="animate-marquee-track whitespace-nowrap flex items-center gap-12 sm:gap-16">
            {/* First sequence of items */}
            {trackItems.map((item, index) => (
              <div key={`track-1-${index}`} className="flex items-center gap-12 sm:gap-16">
                <span className="font-display font-black text-lg sm:text-xl md:text-2xl text-white uppercase tracking-widest">
                  {item}
                </span>
                <StarburstIcon 
                  points={8} 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0" 
                  strokeWidth={3.5}
                />
              </div>
            ))}
            
            {/* Duplicate sequence of items for seamless loop */}
            {trackItems.map((item, index) => (
              <div key={`track-2-${index}`} className="flex items-center gap-12 sm:gap-16">
                <span className="font-display font-black text-lg sm:text-xl md:text-2xl text-white uppercase tracking-widest">
                  {item}
                </span>
                <StarburstIcon 
                  points={8} 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0" 
                  strokeWidth={3.5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Close Button above the details grid (as shown in the screenshot) */}
      {onClose && (
        <div className="flex justify-center mb-10 -mt-2 sm:-mt-6" id="about-close-trigger-container">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-neutral-600 hover:bg-[#111111] hover:scale-105 transition-all duration-300 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md border border-black/15 group"
            id="btn-about-close"
            title="Close profile details"
          >
            <span className="font-sans font-bold text-lg select-none">✕</span>
          </button>
        </div>
      )}

      {/* 2. Profile Details Grid Section */}
      <div 
        className="w-full px-6 md:px-12 pb-16 md:pb-24 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        id="profile-grid"
      >
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col" id="profile-left">
          <div className="flex items-center gap-2 mb-4 sm:mb-6" id="profile-name-header">
            <span className="font-display font-black text-base sm:text-lg tracking-wider text-black uppercase">
              PRAKASH
            </span>
            <StarburstIcon 
              points={8} 
              className="w-4 h-4 text-brand-red animate-pulse" 
              strokeWidth={3.5}
            />
            <span className="font-display font-black text-base sm:text-lg tracking-wider text-black uppercase">
              KUMAWAT
            </span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-black leading-[1.08] tracking-tighter" id="profile-headline">
            Full Stack Developer & AI Integrator.
          </h2>
        </div>

        {/* Right Column: Descriptions & Stats */}
        <div className="lg:col-span-7 flex flex-col pt-1 sm:pt-2" id="profile-right">
          {/* Main big introduction statement */}
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-[34px] text-neutral-900 leading-[1.2] tracking-tight mb-6 sm:mb-8" id="profile-lead-para">
            Full Stack Developer with hands-on experience building production-ready MERN stack applications and AI SaaS tools.
          </h3>

          {/* Secondary body explanation */}
          <p className="font-sans text-base sm:text-[17px] text-neutral-600 leading-relaxed max-w-2xl mb-12 sm:mb-16" id="profile-body-para">
            I actively combine Full Stack development with Generative AI to automate workflows, optimize productivity, and build production-ready applications. My expertise is organized across key professional categories:
            <span className="block mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px] md:text-sm text-neutral-800 font-medium">
              <span><strong className="text-brand-red font-bold">Frontend:</strong> React, Next.js, TypeScript, Tailwind, HTML5</span>
              <span><strong className="text-brand-red font-bold">Backend:</strong> Node.js, Express, JWT, REST APIs</span>
              <span><strong className="text-brand-red font-bold">Databases:</strong> MongoDB, Supabase, MySQL</span>
              <span><strong className="text-brand-red font-bold">Cloud & Hosting:</strong> AWS, Render, Vercel, Netlify</span>
              <span><strong className="text-brand-red font-bold">AI & LLM Tools:</strong> Google Gemini, Google AI Studio, OpenAI, Claude AI</span>
              <span><strong className="text-brand-red font-bold">Developer Tools:</strong> Cursor AI, GitHub Copilot, Windsurf, VS Code Extensions</span>
              <span><strong className="text-brand-red font-bold">CMS:</strong> WordPress, Elementor</span>
              <span><strong className="text-brand-red font-bold">Deployment:</strong> CI/CD, Cloud Deployment</span>
              <span className="sm:col-span-2"><strong className="text-brand-red font-bold">Prompt Engineering:</strong> Prompt Engineering, AI-assisted Full Stack Dev, AI Workflow Automation, AI API Integration</span>
            </span>
          </p>

          {/* Brutalist Profile Meta Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-2" id="profile-meta-grid">
            {/* Meta Block 1 */}
            <div className="flex flex-col gap-1.5" id="meta-born-in">
              <span className="font-display font-black text-[11px] sm:text-xs tracking-widest text-brand-red uppercase">
                LOCATION
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-black tracking-tight">
                Jaipur, India
              </span>
            </div>

            {/* Meta Block 2 */}
            <div className="flex flex-col gap-1.5" id="meta-experience">
              <span className="font-display font-black text-[11px] sm:text-xs tracking-widest text-brand-red uppercase">
                EXPERIENCE
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-black tracking-tight">
                Hands-on Dev
              </span>
            </div>

            {/* Meta Block 3 */}
            <div className="flex flex-col gap-1.5" id="meta-dob">
              <span className="font-display font-black text-[11px] sm:text-xs tracking-widest text-brand-red uppercase">
                EDUCATION
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-black tracking-tight">
                BCA Student
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. High-Fidelity 3-Card Brutalist Stats Grid (As requested in the screenshot) */}
      <div className="w-full px-6 md:px-12 pb-24 md:pb-36 max-w-[1400px] mx-auto" id="profile-stats-container">
        <div 
          className="border-2 border-black grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black text-center overflow-hidden bg-brand-cream" 
          id="profile-stats-grid"
        >
          {/* Card 1: 2+ Years of Experience */}
          <div className="bg-brand-cream py-14 sm:py-16 md:py-20 flex flex-col items-center justify-center gap-3 group hover:bg-neutral-50 transition-colors duration-300" id="stat-card-1">
            <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-black tracking-tight select-none">
              2+
            </span>
            <span className="font-display font-black text-xs sm:text-xs tracking-widest text-neutral-800 uppercase px-6">
              YEARS OF EXPERIENCE
            </span>
          </div>

          {/* Card 2: 10+ Projects Completed (Pitch Black theme with white text) */}
          <div className="bg-[#111111] text-white py-14 sm:py-16 md:py-20 flex flex-col items-center justify-center gap-3 group hover:bg-neutral-900 transition-colors duration-300" id="stat-card-2">
            <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-white tracking-tight select-none">
              10+
            </span>
            <span className="font-display font-black text-xs sm:text-xs tracking-widest text-neutral-300 uppercase px-6">
              PROJECTS COMPLETED
            </span>
          </div>

          {/* Card 3: 5+ Client Projects */}
          <div className="bg-brand-cream py-14 sm:py-16 md:py-20 flex flex-col items-center justify-center gap-3 group hover:bg-neutral-50 transition-colors duration-300" id="stat-card-3">
            <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-black tracking-tight select-none">
              5+
            </span>
            <span className="font-display font-black text-xs sm:text-xs tracking-widest text-neutral-800 uppercase px-6">
              CLIENT PROJECTS
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
