import React from "react";
import StarburstIcon from "./StarburstIcon.tsx";

interface HeaderProps {
  onContactClick?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ onContactClick, currentPath = "/", onNavigate }: HeaderProps) {
  return (
    <header className="w-full bg-transparent z-50 py-6 px-6 md:px-12 max-w-[1400px] mx-auto" id="app-header">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("/");
            }
          }}
          className="flex items-center gap-2 group cursor-pointer select-none"
          id="logo-link"
        >
          <StarburstIcon
            points={16}
            className="w-7 h-7 text-brand-red group-hover:rotate-45 transition-transform duration-500 ease-out"
          />
          <span className="font-display font-black text-2xl tracking-tighter text-black flex items-center">
            prakash<span className="text-brand-red font-black">.</span>
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" id="main-navigation">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("/");
              }
            }}
            className={`font-sans font-medium text-[15px] transition-colors relative py-1 group ${
              currentPath === "/" ? "text-black font-bold" : "text-gray-800 hover:text-black"
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${
              currentPath === "/" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
          <a
            href="/about"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("/about");
              }
            }}
            className={`font-sans font-medium text-[15px] transition-colors relative py-1 group ${
              currentPath === "/about" ? "text-black font-bold" : "text-gray-800 hover:text-black"
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${
              currentPath === "/about" ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </a>
          <a
            href="/services"
            onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate("/services"); } }}
            className={`font-sans font-medium text-[15px] transition-colors relative py-1 group ${currentPath === "/services" ? "text-black font-bold" : "text-gray-800 hover:text-black"}`}
          >
            Services
            <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${currentPath === "/services" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </a>
          <a
            href="https://drive.google.com/file/d/1jAal8lY6r7DNp-QsRFd6hu_xMfPyd4nA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-medium text-[15px] text-gray-800 hover:text-brand-red transition-colors relative py-1 group flex items-center gap-1.5"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="font-sans font-medium text-[15px] text-gray-800 hover:text-black transition-colors relative py-1 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Action Button */}
        <button
          onClick={onContactClick}
          className="font-sans font-bold text-sm tracking-tight border border-black bg-transparent text-black px-6 py-2.5 rounded-none hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          id="nav-action-talk"
        >
          Let's talk
        </button>
      </div>
    </header>
  );
}
