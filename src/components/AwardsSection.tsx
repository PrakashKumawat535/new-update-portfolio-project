import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface AwardItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  link: string;
}

const awardsList: AwardItem[] = [
  {
    id: 1,
    title: "TravelMind AI",
    subtitle: "Full-Stack AI Travel Planner powered by Google Gemini AI & MERN Stack",
    category: "AI APPS",
    year: "2025",
    link: "https://ai-travel-itinerary-planner-pixs.onrender.com/",
  },
  {
    id: 2,
    title: "FormVibe",
    subtitle: "No-Code Dynamic Form Builder with real-time preview & analytics",
    category: "SaaS DEV",
    year: "2025",
    link: "https://no-code-dynamic-form-builder.onrender.com/",
  },
  {
    id: 3,
    title: "ShopMate",
    subtitle: "QR-based customer review & billing automation system",
    category: "WEB SAAS",
    year: "2024",
    link: "https://shopmate-saas-ai.vercel.app/",
  },
  {
    id: 4,
    title: "Campus Mantri — GeeksforGeeks",
    subtitle: "Led student engagement for coding events and tech workshops",
    category: "LEADERSHIP",
    year: "2024",
    link: "https://media.geeksforgeeks.org/auth-certificates/1780252200/5b2c313632f142ee77b62014de82971e.png",
  },
];

export default function AwardsSection() {
  return (
    <section className="w-full bg-brand-cream border-t border-black py-20 md:py-32 px-6 md:px-12 relative overflow-hidden" id="awards-section">
      {/* Decorative giant starburst peeking from the right, as seen in the screenshots */}
      <div className="absolute right-[-80px] sm:right-[-120px] md:right-[-160px] lg:right-[-200px] top-[40%] transform -translate-y-1/2 pointer-events-none select-none z-0 hidden xs:block">
        <StarburstIcon 
          points={16} 
          className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] text-brand-red opacity-100 rotate-[15deg]" 
          strokeWidth={2.4} 
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header: Centered layout as shown in the screenshot */}
        <div className="flex flex-col items-center text-center mb-16" id="awards-section-header">
          <StarburstIcon points={16} className="w-8 h-8 text-brand-red mb-4" strokeWidth={2.8} />
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-[80px] text-black leading-[1.1] tracking-tighter" id="awards-title">
            Highlights
          </h2>
          <span className="font-display font-black text-xs sm:text-sm tracking-[0.25em] text-neutral-800 uppercase mt-4 block" id="awards-subheading">
            PROJECTS & ACCOMPLISHMENTS
          </span>
        </div>

        {/* Boxed Brutalist Awards List */}
        <div className="flex flex-col gap-6" id="awards-cards-list">
          {awardsList.map((award) => (
            <a
              key={award.id}
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black bg-brand-cream hover:bg-[#5c5c5c] text-black hover:text-white transition-all duration-300 p-5 sm:p-6 md:px-8 md:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 cursor-pointer text-left block no-underline"
              id={`award-card-${award.id}`}
            >
              {/* Left Side: Red block + Text */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Red square with white number */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-lg sm:text-xl text-white">
                    {award.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300">
                    {award.title}
                  </h3>
                  <span className="font-sans text-sm text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300 mt-1">
                    {award.subtitle}
                  </span>
                </div>
              </div>

              {/* Right Side: Category and Year */}
              <div className="flex sm:text-right shrink-0">
                <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-4">
                  <span className="text-neutral-800 group-hover:text-neutral-200">
                    {award.category}
                  </span>
                  <span className="text-neutral-500 group-hover:text-neutral-300 flex items-center gap-1">
                    {award.year} ↗
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

