import React, { useMemo } from "react";
import { motion } from "motion/react";
import StarburstIcon from "./StarburstIcon.tsx";

interface HeroProps {
  onTalkClick?: () => void;
  profile?: { name?: string; location?: string; headline?: string; tagline?: string; resumeUrl?: string };
}

export default function Hero({ onTalkClick, profile }: HeroProps) {
  // Mathematically generate the outline path of an 8-pointed thick asterisk.
  // This avoids messy raster assets and ensures a crisp, vector finish that handles scaling perfectly.
  const crossPathD = useMemo(() => {
    const points: string[] = [];
    const Ro = 46; // Outer radius (within 0-50 bounds)
    const Ri = 18; // Inner radius where arms intersect
    const halfWidth = 7.5; // Half width of each arm in degrees (gives thick, balanced arms)

    for (let i = 0; i < 8; i++) {
      const angle = i * 45;

      // Outer left corner of the arm
      const a1 = ((angle - halfWidth) * Math.PI) / 180;
      const x1 = 50 + Ro * Math.cos(a1);
      const y1 = 50 + Ro * Math.sin(a1);
      points.push(`${x1.toFixed(2)},${y1.toFixed(2)}`);

      // Outer right corner of the arm
      const a2 = ((angle + halfWidth) * Math.PI) / 180;
      const x2 = 50 + Ro * Math.cos(a2);
      const y2 = 50 + Ro * Math.sin(a2);
      points.push(`${x2.toFixed(2)},${y2.toFixed(2)}`);

      // Inner corner between this arm and the next
      const a3 = ((angle + 22.5) * Math.PI) / 180;
      const x3 = 50 + Ri * Math.cos(a3);
      const y3 = 50 + Ri * Math.sin(a3);
      points.push(`${x3.toFixed(2)},${y3.toFixed(2)}`);
    }

    return `M ${points.join(" L ")} Z`;
  }, []);

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-6 md:px-12 py-10 md:py-16 max-w-[1400px] mx-auto overflow-hidden" id="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Typography & Action Controls */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1" id="hero-content-left">
          
          {/* Main Title Heading */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] tracking-tighter leading-[1.02] text-black uppercase" id="hero-title">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Hi, I’m {profile?.name?.trim().split(" ")[0] || "Prakash"}.
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center flex-wrap gap-x-2 md:gap-x-4 mt-1 md:mt-2"
            >
              <span>Full Stack</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="inline-flex items-center justify-center"
              >
                <StarburstIcon
                  points={16}
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-brand-red"
                  strokeWidth={3.2}
                />
              </motion.span>
              <span>Developer</span>
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block mt-1 md:mt-2"
            >
              <span>Based in </span>
              {/* Premium custom strikethrough using pseudo-element to guarantee uniform thick rendering across screen sizes */}
              <span className="relative inline-block px-1 select-none before:absolute before:left-0 before:right-0 before:top-[55%] before:h-[6px] md:before:h-[8px] before:bg-black before:rounded-sm before:content-['']">
                {profile?.location || "Jaipur"}
              </span>
            </motion.span>
          </h1>

          {(profile?.headline || profile?.tagline) && <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">{profile?.headline}{profile?.headline && profile?.tagline ? " — " : ""}{profile?.tagline}</p>}

          {/* Discipline tags with rotating starbursts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center flex-wrap gap-y-3 gap-x-3 sm:gap-x-4 md:gap-x-6 text-black mt-8 md:mt-12 mb-10 md:mb-14"
            id="hero-disciplines"
          >
            <span className="font-display font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">Full Stack</span>
            <StarburstIcon points={8} className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red animate-pulse" strokeWidth={3.5} />
            <span className="font-display font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">MERN Stack</span>
            <StarburstIcon points={8} className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red animate-pulse" strokeWidth={3.5} />
            <span className="font-display font-black text-sm sm:text-base md:text-lg tracking-widest uppercase">AI-Powered</span>
          </motion.div>

          {/* Brutalist Merged Button Group & CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center flex-wrap gap-4"
            id="hero-actions-container"
          >
            <div className="flex border border-black rounded-none overflow-hidden max-w-max bg-transparent" id="hero-button-group">
              <button
                onClick={onTalkClick}
                className="bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-sans font-bold text-[15px] sm:text-base px-6 py-4 sm:px-8 sm:py-4.5 cursor-pointer rounded-none border-r border-black"
                id="btn-got-project"
              >
                Got a project?
              </button>
              <button
                onClick={onTalkClick}
                className="bg-transparent text-black hover:bg-black hover:text-white transition-colors duration-300 font-sans font-bold text-[15px] sm:text-base px-6 py-4 sm:px-8 sm:py-4.5 cursor-pointer rounded-none"
                id="btn-lets-talk-period"
              >
                Let's talk.
              </button>
            </div>

            <a
              href={profile?.resumeUrl || "https://drive.google.com/file/d/1jAal8lY6r7DNp-QsRFd6hu_xMfPyd4nA/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf8f5] text-black hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 font-sans font-bold text-[15px] sm:text-base px-6 py-4 sm:px-8 sm:py-4.5 cursor-pointer rounded-none border border-black flex items-center gap-2 shadow-sm"
              id="btn-download-cv-hero"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Circular Graphic Portrait of Tayler */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2" id="hero-graphic-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px] xl:w-[500px] xl:h-[500px] aspect-square rounded-full bg-white overflow-hidden"
            id="portrait-circle-container"
          >
            {/* Layer 1 (Background): Giant 8-point cross outline in vibrant red-orange */}
            <div className="absolute inset-0 p-8 flex items-center justify-center select-none" id="graphic-cross-bg">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-brand-red opacity-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="cross-mask">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <circle cx="50" cy="50" r="24" fill="black" />
                  </mask>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                  d={crossPathD}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinejoin="miter"
                  mask="url(#cross-mask)"
                />
              </svg>
            </div>

            {/* Layer 2 (Foreground): High-contrast black and white studio portrait of Tayler */}
            {/* The mix-blend-multiply ensures that bright parts of the image blend into the background,
                creating a gorgeous double exposure designer effect with the red cross */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center" id="graphic-portrait-image">
              <img
                src="https://res.cloudinary.com/dufypfmoi/image/upload/v1784189521/Prakash_kumawat_dotdar.png"
                alt="Prakash Kumawat - Full Stack Developer Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.2] brightness-[1.05] mix-blend-multiply pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
