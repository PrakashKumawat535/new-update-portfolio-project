import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    quote: "Prakash delivered our business landing page end-to-end. He handled everything from hosting configurations and Elementor styles to integrating customized contact forms. Our lead conversions increased significantly within the first month.",
    author: "Rohan Mehta",
    role: "Founder",
    company: "SolarSave Solutions",
    rating: 5,
  },
  {
    quote: "As a Campus Mantri for GeeksforGeeks, Prakash exhibited outstanding dedication. He organized workshops, drove student engagement, and helped dozens of peers start their web development journeys with the MERN stack.",
    author: "Shreya Sharma",
    role: "Tech Lead",
    company: "Campus Coding Hub",
    rating: 5,
  },
  {
    quote: "We were highly impressed by the ShopMate application built by Prakash. His execution of the QR-based review redirection system and billing panel showed an exceptional grasp of both front-end and back-end integration.",
    author: "Amit Verma",
    role: "Product Lead",
    company: "E-Commerce Solutions",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-brand-cream border-t border-black py-20 md:py-28 px-6 md:px-12" id="testimonials-section">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6" id="testimonials-header">
          <div>
            <div className="flex items-center gap-2 mb-3" id="testimonials-subheading">
              <span className="font-display font-black text-sm tracking-wider text-black uppercase">
                TESTIMONIALS
              </span>
              <StarburstIcon points={8} className="w-4 h-4 text-brand-red animate-pulse" strokeWidth={3.5} />
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-black leading-none tracking-tighter uppercase" id="testimonials-title">
              Happy<br />Customers.
            </h2>
          </div>
          <p className="font-sans text-neutral-600 text-base md:text-lg max-w-sm md:text-right leading-relaxed" id="testimonials-desc">
            Don't just take my word for it. Here is what clients and organizers say about my technical dedication, execution speed, and collaboration.
          </p>
        </div>

        {/* Testimonials Grid (Brutalist card layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonials.map((test, index) => (
            <div 
              key={index}
              className="bg-white border border-black p-8 sm:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,60,29,1)] cursor-default"
              id={`testimonial-card-${index}`}
            >
              {/* Quote Content */}
              <div>
                {/* Rating Stars (5 standard points) */}
                <div className="flex items-center gap-1 mb-6" id={`stars-${index}`}>
                  {Array.from({ length: test.rating }).map((_, rIdx) => (
                    <span key={rIdx}>
                      <StarburstIcon 
                        points={8} 
                        className="w-4 h-4 text-brand-red" 
                        strokeWidth={4} 
                      />
                    </span>
                  ))}
                </div>

                {/* Main Quote */}
                <p className="font-sans text-neutral-800 text-base sm:text-lg italic leading-relaxed mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-black/5" id={`author-${index}`}>
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-[#111111] text-white font-display font-black text-base flex items-center justify-center select-none rounded-none shrink-0 border border-black">
                  {test.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-black tracking-tight uppercase">
                    {test.author}
                  </h4>
                  <p className="font-sans text-xs text-neutral-500 font-medium">
                    {test.role} — <span className="text-black font-bold">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
