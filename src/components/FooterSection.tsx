import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface FooterSectionProps {
  onContactClick?: () => void;
  profile?: { email?: string; location?: string; githubUrl?: string; linkedinUrl?: string; portfolioUrl?: string };
}

const socialLinks = [
  { name: "GitHub", url: "https://github.com/PrakashKumawat535", handle: "PrakashKumawat535" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prakashkumawat535/", handle: "prakashkumawat535" },
  { name: "Email", url: "mailto:prakashkumawat6128@gmail.com", handle: "prakashkumawat6128" },
  { name: "Portfolio", url: "https://prakash-portfolio-new.vercel.app/", handle: "prakash-portfolio-new" },
];

export default function FooterSection({ onContactClick, profile }: FooterSectionProps) {
  return (
    <footer className="w-full bg-[#111111] text-white border-t border-black py-20 md:py-28 px-6 md:px-12" id="rich-footer-section">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between h-full">
        
        {/* Giant CTA Top Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24" id="footer-top-cta">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4" id="footer-subheading">
              <span className="font-display font-black text-sm tracking-wider text-neutral-400 uppercase">
                GET IN TOUCH
              </span>
              <StarburstIcon points={8} className="w-4 h-4 text-brand-red animate-spin-slow" strokeWidth={3.5} />
            </div>
            
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-none tracking-tighter uppercase text-white" id="footer-cta-title">
              SAY HELLO<span className="text-brand-red">.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end" id="footer-cta-action">
            <button
              onClick={onContactClick}
              className="bg-brand-red text-white hover:bg-white hover:text-black transition-all duration-300 font-sans font-bold text-base tracking-wider uppercase px-10 py-6 border border-brand-red hover:border-black rounded-none cursor-pointer flex items-center gap-3 w-full sm:w-auto justify-center"
              id="footer-btn-talk"
            >
              Start a project 
              <span className="text-lg">✳</span>
            </button>
          </div>
        </div>

        {/* Footer Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 border-t border-neutral-800" id="footer-info-grid">
          {/* Email / Location Block */}
          <div className="md:col-span-4 flex flex-col gap-6" id="footer-contacts">
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase">
                Direct Email
              </span>
              <a 
                href={`mailto:${profile?.email || "prakashkumawat6128@gmail.com"}`} 
                className="font-display font-black text-lg sm:text-xl text-white hover:text-brand-red transition-colors"
              >
                {profile?.email || "prakashkumawat6128@gmail.com"}
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase">
                Location
              </span>
              <span className="font-display font-bold text-lg text-neutral-300">
                {profile?.location || "Jaipur, Rajasthan, India"}
              </span>
            </div>
          </div>

          {/* Social Links List */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8" id="footer-socials">
            {socialLinks.map((soc, index) => {
              const dynamic = soc.name === "GitHub" ? profile?.githubUrl : soc.name === "LinkedIn" ? profile?.linkedinUrl : soc.name === "Email" ? (profile?.email ? `mailto:${profile.email}` : undefined) : profile?.portfolioUrl;
              const href = dynamic || soc.url;
              return <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 group"
                id={`footer-social-${index}`}
              >
                <span className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase group-hover:text-brand-red transition-colors">
                  {soc.name}
                </span>
                <span className="font-sans text-sm font-medium text-neutral-300 group-hover:text-white transition-colors flex items-center gap-1">
                  {soc.handle}
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                    ↗
                  </span>
                </span>
              </a>;
            })}
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-neutral-800 text-xs text-neutral-500 font-sans" id="footer-rights-row">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} Prakash Kumawat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-xs font-sans text-neutral-500"
              id="btn-back-to-top"
            >
              Back to top ↑
            </button>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
