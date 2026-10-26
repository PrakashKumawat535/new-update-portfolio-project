import React from "react";
import { motion } from "motion/react";
import StarburstIcon from "./StarburstIcon.tsx";
import { Mail, Phone, MapPin } from "lucide-react";

interface StarburstShapeProps {
  className?: string;
  filled?: boolean;
}

// Custom 8-pointed sharp starburst generator supporting both filled and outline modes
function StarburstShape({ className = "w-64 h-64 text-brand-red", filled = false }: StarburstShapeProps) {
  const pointsCount = 8;
  const outerRadius = 96;
  const innerRadius = 40;
  const center = 100;
  const vertices = [];
  
  for (let i = 0; i < pointsCount * 2; i++) {
    const angle = (i * Math.PI) / pointsCount - Math.PI / 2;
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    vertices.push(`${x},${y}`);
  }
  const pointsString = vertices.join(" ");

  return (
    <svg
      viewBox="0 0 200 200"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "3.2"}
      strokeLinejoin="miter"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={pointsString} />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full bg-brand-cream flex flex-col overflow-x-hidden animate-fadeIn" id="about-page-root">
      
      {/* SECTION 1: ABOUT PAGE HERO (Screenshot 1 / 4) */}
      <section 
        className="w-full bg-brand-cream py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="about-hero"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          {/* Large Statement Heading */}
          <div className="text-center w-full mb-6 md:mb-10" id="launch-heading-container">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-center text-[28px] sm:text-[42px] md:text-[58px] lg:text-[72px] xl:text-[84px] tracking-tighter leading-[1.1] md:leading-[1.08] text-black max-w-5xl mx-auto"
              id="launch-title"
            >
              You're launching a<br className="hidden md:block" />
              business and we can help<br className="hidden md:block" />
              you make it look pretty.
            </motion.h1>
          </div>

          {/* Disciplines Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 mb-10 md:mb-16 text-center"
            id="launch-disciplines"
          >
            <span className="font-display font-black text-xs sm:text-sm md:text-lg tracking-widest text-black uppercase">
              FULL STACK
            </span>
            <StarburstIcon 
              points={8} 
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-red animate-pulse" 
              strokeWidth={3.5} 
            />
            <span className="font-display font-black text-xs sm:text-sm md:text-lg tracking-widest text-black uppercase">
              DEVELOPMENT
            </span>
            <StarburstIcon 
              points={8} 
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-red animate-pulse" 
              strokeWidth={3.5} 
            />
            <span className="font-display font-black text-xs sm:text-sm md:text-lg tracking-widest text-black uppercase">
              AI INTEGRATIONS
            </span>
          </motion.div>

          {/* Professional Developer Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10 md:mb-14 px-6 py-2 border border-black bg-[#111111] text-[#eae7e1] font-display font-black text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase select-none hover:bg-brand-red hover:text-white transition-colors duration-300"
            id="professional-developer-tagline"
          >
            Professional Full Stack Web Developer
          </motion.div>

          {/* Big Wide Banner Image with Red Zig-Zag Graphic Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-white border border-black overflow-hidden shadow-sm"
            id="launch-image-banner"
          >
            {/* Black & White Camera Lens Equipment Background */}
            <div className="absolute inset-0 w-full h-full" id="launch-bg-image">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1600"
                alt="Professional creative equipment background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[1.05] pointer-events-none"
              />
            </div>

            {/* Grayscale overlay for beautiful styling depth */}
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-overlay pointer-events-none" />

            {/* Red Zig-Zag Graphic Overlay */}
            <div className="absolute inset-0 w-full h-full select-none" id="launch-zigzag-overlay">
              <svg
                viewBox="0 0 1400 600"
                className="w-full h-full text-brand-red opacity-90"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
                  d="M 1350,0 L 1050,200 L 1280,200 L 880,450 L 1150,450 L 800,600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: HUGE STARBURST + STACKED LOREM IPSUM (Screenshot 2) */}
      {/* Pinned to the left and cut off exactly as requested on laptop screens */}
      <section 
        className="w-full bg-brand-cream py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="about-mid-section"
      >
        {/* Giant Starburst Shape - half-hidden on the left margin */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[45%] md:-translate-x-[35%] lg:-translate-x-[30%] pointer-events-none z-0"
          id="giant-starburst-container"
        >
          <StarburstShape filled={false} className="w-56 h-56 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] text-brand-red opacity-100" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 relative z-10" id="about-mid-grid">
          {/* Spacer on desktop to push the text columns past the giant left starburst */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5" />

          {/* Right Column: Two stacked paragraphs of exact Lorem Ipsum copy */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col gap-6 sm:gap-8 md:gap-12 text-black pt-2 md:pt-4" id="about-mid-right">
            <p className="font-sans text-base sm:text-lg md:text-[21px] lg:text-[24px] xl:text-[26px] leading-[1.5] text-neutral-800 tracking-tight font-normal">
              I am a dedicated Full Stack MERN Developer specializing in building high-performance web systems and intelligent AI-powered SaaS applications. Over my development journey, I have focused on combining Full Stack development with Generative AI to deliver real-world business solutions, such as dynamic no-code form builders and automated customer review systems.
            </p>
            <p className="font-sans text-base sm:text-lg md:text-[21px] lg:text-[24px] xl:text-[26px] leading-[1.5] text-neutral-800 tracking-tight font-normal">
              Eagerly exploring new AI technologies, LLM integrations, and modern development workflows, I actively build and learn AI Agent applications. I utilize tools like Google Gemini, OpenAI, Supabase, and Node.js to architect optimized database schemas and secure user sessions. As a student community leader with GeeksforGeeks, I thrive in fast-paced environments where code translates directly to client value.
            </p>
          </div>
        </div>
      </section>

      {/* MID-BANNER: Widescreen "SLOW SODA" Packaging Design Banner (Screenshot 2 / 3) */}
      <section className="w-full px-4 sm:px-6 md:px-12 pb-12 md:pb-20 lg:pb-24 max-w-[1400px] mx-auto" id="about-mid-banner">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] bg-white border border-black overflow-hidden shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1600"
            alt="Slow Soda Gradient packaging mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale contrast-[1.2] brightness-[0.9] hover:scale-[1.03] transition-transform duration-700 ease-out pointer-events-none"
          />
        </motion.div>
      </section>

      {/* SECTION 3: 2-COLUMN TEXT + BRUTALIST 3-CARD STATS BOX (Screenshot 3) */}
      <section 
        className="w-full bg-brand-cream pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col"
        id="about-bottom-section"
      >
        {/* Two-column layout with side-by-side Lorem Ipsum paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-20" id="about-bottom-text-grid">
          
          {/* Column 1 (Left) */}
          <div className="font-sans text-sm sm:text-base md:text-[18px] leading-[1.6] text-neutral-700 tracking-tight flex flex-col gap-4">
            <p>
              My engineering philosophy centers on clean code, strong typing, and fluid usability. Whether structuring database models in MongoDB or Supabase, configuring secure JWT authentication, or optimizing responsive client interfaces, I build with production readiness and security in mind.
            </p>
            <p>
              I strive to integrate cutting-edge APIs to empower small businesses and users, delivering customized client portals, automated QR tools, and localized content generators from start to finish. I actively use AI development tools to optimize workflows and boost development productivity.
            </p>
          </div>

          {/* Column 2 (Right) */}
          <div className="font-sans text-sm sm:text-base md:text-[18px] leading-[1.5] text-neutral-700 tracking-tight flex flex-col gap-4 border border-black/10 p-6 bg-black/[0.02]">
            <h4 className="font-display font-black text-black text-base uppercase tracking-wider mb-2">
              Core Tech Stack & Skills
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs md:text-sm">
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Frontend</strong>
                <span className="text-neutral-600 block leading-snug">React, Next.js, TypeScript, Tailwind</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Backend</strong>
                <span className="text-neutral-600 block leading-snug">Node.js, Express, REST APIs, JWT</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Databases</strong>
                <span className="text-neutral-600 block leading-snug">MongoDB, Supabase, MySQL</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Cloud & Hosting</strong>
                <span className="text-neutral-600 block leading-snug">AWS, Render, Vercel, Netlify</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">AI & LLM Tools</strong>
                <span className="text-neutral-600 block leading-snug">Gemini, OpenAI, Claude AI</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Developer Tools</strong>
                <span className="text-neutral-600 block leading-snug">Cursor AI, GitHub Copilot, Windsurf</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">CMS</strong>
                <span className="text-neutral-600 block leading-snug">WordPress, Elementor</span>
              </div>
              <div>
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Deployment</strong>
                <span className="text-neutral-600 block leading-snug">CI/CD, Cloud Deploy</span>
              </div>
              <div className="col-span-2">
                <strong className="text-brand-red block tracking-wider uppercase font-display font-black text-[11px]">Prompt Engineering</strong>
                <span className="text-neutral-600 block leading-snug">AI API Integration, AI-assisted Dev, Workflow Automation</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Card Brutalist Stats Grid (Recreating Screenshot 3 precisely) */}
        <div 
          className="border border-black grid grid-cols-1 md:grid-cols-3 divide-y divide-black md:divide-y-0 md:divide-x divide-black text-center overflow-hidden bg-brand-cream shadow-sm" 
          id="profile-stats-grid"
        >
          {/* Card 1: 2+ Years of Experience */}
          <div className="bg-brand-cream py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center gap-2 sm:gap-3 group hover:bg-[#eae7e1] transition-colors duration-300" id="stat-card-1">
            <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight select-none">
              2+
            </span>
            <span className="font-display font-black text-[10px] sm:text-xs tracking-widest text-neutral-800 uppercase px-4 sm:px-6">
              YEARS OF EXPERIENCE
            </span>
          </div>

          {/* Card 2: 10+ Projects Completed (Pitch Black Theme with white text) */}
          <div className="bg-[#111111] text-white py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center gap-2 sm:gap-3 group hover:bg-[#1f1f1f] transition-colors duration-300" id="stat-card-2">
            <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight select-none">
              10+
            </span>
            <span className="font-display font-black text-[10px] sm:text-xs tracking-widest text-neutral-300 uppercase px-4 sm:px-6">
              PROJECTS COMPLETED
            </span>
          </div>

          {/* Card 3: 5+ Client Projects */}
          <div className="bg-brand-cream py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center gap-2 sm:gap-3 group hover:bg-[#eae7e1] transition-colors duration-300" id="stat-card-3">
            <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight select-none">
              5+
            </span>
            <span className="font-display font-black text-[10px] sm:text-xs tracking-widest text-neutral-800 uppercase px-4 sm:px-6">
              CLIENT PROJECTS
            </span>
          </div>
        </div>

      </section>

      {/* SECTION 4: EXPERIENCE SECTION (Screenshot 1 / 4) */}
      <section 
        className="w-full bg-brand-cream border-t border-black py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="experience-section"
      >
        {/* Giant Starburst Shape - half-hidden on the right margin on laptop screens */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] md:translate-x-[35%] lg:translate-x-[30%] pointer-events-none z-0"
          id="experience-starburst"
        >
          <StarburstShape filled={true} className="w-56 h-56 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] text-brand-red opacity-100 rotate-[15deg]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16" id="experience-section-header">
            <StarburstIcon points={16} className="w-8 h-8 text-brand-red mb-4" strokeWidth={2.8} />
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[64px] lg:text-[76px] text-black leading-[1.1] tracking-tighter" id="experience-title">
              Experience
            </h2>
            <span className="font-display font-black text-[10px] sm:text-xs md:text-sm tracking-[0.25em] text-neutral-800 uppercase mt-4 block" id="experience-subheading">
              WORK HISTORY & ENGAGEMENTS
            </span>
          </div>

          {/* Brutalist Experience List */}
          <div className="flex flex-col gap-6 max-w-[1000px] mx-auto" id="experience-cards-list">
            
            {/* Experience Card 1 */}
            <div 
              className="group border border-black bg-[#f4f2ee] hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm"
              id="exp-card-1"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#111111] flex items-center justify-center shrink-0">
                  <StarburstIcon points={16} className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    Campus Mantri (Community Lead)
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    GeeksforGeeks
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-sm sm:text-base tracking-wider transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-500 group-hover:text-neutral-300">Jan 2024 - Jan 2025</span>
                </span>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div 
              className="group border border-black bg-[#f4f2ee] hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm"
              id="exp-card-2"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#111111] flex items-center justify-center shrink-0">
                  <StarburstIcon points={16} className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    Full Stack Developer (SaaS Builders)
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    Freelance & Self-Authored Productions
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-sm sm:text-base tracking-wider transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-500 group-hover:text-neutral-300">Jan 2023 - Present</span>
                </span>
              </div>
            </div>

            {/* Experience Card 3 - Grayed Out Styled as shown in Screenshot 1 */}
            <div 
              className="group border border-black bg-[#b5b3ad] hover:bg-[#5c5c5c] text-[#2c2b29] hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm"
              id="exp-card-3"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#111111] flex items-center justify-center shrink-0">
                  <StarburstIcon points={16} className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    WordPress Developer
                  </h3>
                  <span className="font-sans text-sm text-neutral-700 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    SolarSave & Client projects
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-sm sm:text-base tracking-wider transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-700 group-hover:text-neutral-300">June 2022 - Dec 2022</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: AWARDS SECTION (Screenshot 2 / 4) */}
      <section 
        className="w-full bg-brand-cream border-t border-black py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="awards-section"
      >
        {/* Giant Starburst Shape - half-hidden on the right margin on laptop screens */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] md:translate-x-[35%] lg:translate-x-[30%] pointer-events-none z-0"
          id="awards-starburst"
        >
          <StarburstShape filled={true} className="w-56 h-56 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] text-brand-red opacity-100 rotate-[-12deg]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16" id="awards-section-header">
            <StarburstIcon points={16} className="w-8 h-8 text-brand-red mb-4" strokeWidth={2.8} />
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[64px] lg:text-[76px] text-black leading-[1.1] tracking-tighter" id="awards-title">
              Highlights
            </h2>
            <span className="font-display font-black text-[10px] sm:text-xs md:text-sm tracking-[0.25em] text-neutral-800 uppercase mt-4 block" id="awards-subheading">
              PROJECTS & ACCOMPLISHMENTS
            </span>
          </div>

          {/* Boxed Brutalist Awards List */}
          <div className="flex flex-col gap-6 max-w-[1000px] mx-auto" id="awards-cards-list">
            
            {/* Award 1 */}
            <a 
              href="https://ai-travel-itinerary-planner-pixs.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black bg-brand-cream hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm text-left block no-underline"
              id="award-card-1"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-lg sm:text-xl text-white">1</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    TravelMind AI
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    Full-Stack AI Travel Planner powered by Google Gemini AI & MERN Stack
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-800 group-hover:text-neutral-200">AI APPS</span>
                  <span className="text-neutral-500 group-hover:text-neutral-300 flex items-center gap-1">2025 ↗</span>
                </span>
              </div>
            </a>

            {/* Award 2 */}
            <a 
              href="https://no-code-dynamic-form-builder.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black bg-brand-cream hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm text-left block no-underline"
              id="award-card-2"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-lg sm:text-xl text-white">2</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    FormVibe
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    No-Code Dynamic Form Builder with real-time preview & analytics
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-800 group-hover:text-neutral-200">SaaS DEV</span>
                  <span className="text-neutral-500 group-hover:text-neutral-300 flex items-center gap-1">2025 ↗</span>
                </span>
              </div>
            </a>

            {/* Award 3 */}
            <a 
              href="https://shopmate-saas-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black bg-brand-cream hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm text-left block no-underline"
              id="award-card-3"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-lg sm:text-xl text-white">3</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    ShopMate
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    QR-based customer review & billing automation system
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-800 group-hover:text-neutral-200">WEB SAAS</span>
                  <span className="text-neutral-500 group-hover:text-neutral-300 flex items-center gap-1">2024 ↗</span>
                </span>
              </div>
            </a>

            {/* Award 4 */}
            <a 
              href="https://media.geeksforgeeks.org/auth-certificates/1780252200/5b2c313632f142ee77b62014de82971e.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black bg-brand-cream hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer shadow-sm text-left block no-underline"
              id="award-card-4"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-lg sm:text-xl text-white">4</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    Campus Mantri — GeeksforGeeks
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    Led student engagement for coding events and tech workshops
                  </span>
                </div>
              </div>
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-800 group-hover:text-neutral-200">LEADERSHIP</span>
                  <span className="text-neutral-500 group-hover:text-neutral-300 flex items-center gap-1">2024 ↗</span>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICES SECTION (Screenshot 2) */}
      <section 
        className="w-full bg-brand-cream border-t border-black py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="services-grid-section"
      >
        {/* Giant Starburst Shape - half-hidden on the left margin, rotating slightly */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[45%] md:-translate-x-[35%] lg:-translate-x-[30%] pointer-events-none z-0"
          id="services-starburst-about"
        >
          <StarburstShape filled={true} className="w-56 h-56 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] text-brand-red opacity-100 rotate-[45deg]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16" id="services-section-header">
            <StarburstIcon points={16} className="w-8 h-8 text-brand-red mb-4" strokeWidth={2.8} />
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-[64px] lg:text-[76px] text-black leading-[1.1] tracking-tighter" id="services-title-about">
              Services
            </h2>
            <span className="font-display font-black text-[10px] sm:text-xs md:text-sm tracking-[0.25em] text-neutral-800 uppercase mt-4 block" id="services-subheading-about">
              EXPERTISE & CORE CAPABILITIES
            </span>
          </div>

          {/* Grid of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto" id="services-cards-grid">
            
            {/* Card 1: Full Stack Web Dev */}
            <div 
              className="group border border-black bg-[#f4f2ee] hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between gap-6 cursor-pointer shadow-sm"
              id="srv-card-1"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none transition-colors duration-300">
                  Full Stack Web Dev
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mt-2">
                  Building high-performance end-to-end MERN stack web applications with complete database schemas, custom routes, and JWT authorization.
                </p>
              </div>
            </div>

            {/* Card 2: AI & Modern Dev Tools */}
            <div 
              className="group border border-black bg-[#f4f2ee] hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between gap-6 cursor-pointer shadow-sm"
              id="srv-card-2"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none transition-colors duration-300">
                  AI & Modern Dev Tools
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mt-2">
                  Hands-on experience with Google Gemini, OpenAI, and Claude. Leveraging prompt engineering and tools like Cursor, Copilot, and Windsurf to maximize workflows and build smart solutions.
                </p>
              </div>
            </div>

            {/* Card 3: Database Architecting */}
            <div 
              className="group border border-black bg-[#f4f2ee] hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between gap-6 cursor-pointer shadow-sm"
              id="srv-card-3"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none transition-colors duration-300">
                  Database Architecting
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mt-2">
                  Designing highly reliable data repositories and fast indexing on MongoDB, Supabase, and custom server storage solutions.
                </p>
              </div>
            </div>

            {/* Card 4: WordPress client sites */}
            <div 
              className="group border border-black bg-[#b5b3ad] hover:bg-[#5c5c5c] text-[#2c2b29] hover:text-white transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between gap-6 cursor-pointer shadow-sm"
              id="srv-card-4"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none transition-colors duration-300">
                  WordPress & CMS Sites
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-700 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mt-2">
                  Developing customized client landing pages using Elementor, WordPress, custom code widgets, and standard hosting controls.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT DETAILS SECTION (Screenshot 1) */}
      <section 
        className="w-full bg-brand-cream border-t border-black py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden" 
        id="about-contact-details"
      >
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto" id="contact-details-grid">
            
            {/* Box 1: Message Me */}
            <div 
              className="bg-[#111111] border border-black p-8 sm:p-10 flex flex-col items-center text-center justify-center hover:scale-[1.02] hover:bg-[#1f1f1f] transition-all duration-300 group"
              id="contact-box-1"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mb-2">
                Message Me
              </h3>
              <p className="font-sans text-neutral-300 text-sm sm:text-base font-medium select-all">
                prakashkumawat6128@gmail.com
              </p>
            </div>

            {/* Box 2: Call Us */}
            <div 
              className="bg-[#111111] border border-black p-8 sm:p-10 flex flex-col items-center text-center justify-center hover:scale-[1.02] hover:bg-[#1f1f1f] transition-all duration-300 group"
              id="contact-box-2"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mb-2">
                Call Us
              </h3>
              <p className="font-sans text-neutral-300 text-sm sm:text-base font-medium select-all">
                +91 90792 13948
              </p>
            </div>

            {/* Box 3: Address */}
            <div 
              className="bg-[#111111] border border-black p-8 sm:p-10 flex flex-col items-center text-center justify-center hover:scale-[1.02] hover:bg-[#1f1f1f] transition-all duration-300 group"
              id="contact-box-3"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mb-2">
                Address
              </h3>
              <p className="font-sans text-neutral-300 text-sm sm:text-base font-medium leading-relaxed">
                Jaipur, Rajasthan, India
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
