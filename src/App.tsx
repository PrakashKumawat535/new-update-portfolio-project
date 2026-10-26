import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import AboutSection from "./components/AboutSection.tsx";
import AboutPage from "./components/AboutPage.tsx";
import AwardsSection from "./components/AwardsSection.tsx";
import PortfolioSection from "./components/PortfolioSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import TestimonialsSection from "./components/TestimonialsSection.tsx";
import ArticlesSection from "./components/ArticlesSection.tsx";
import FooterSection from "./components/FooterSection.tsx";
import StarburstIcon from "./components/StarburstIcon.tsx";
import ServicesPage from "./components/ServicesPage.tsx";
import AdminPage from "./components/AdminPage.tsx";
import ChatWidget from "./components/ChatWidget.tsx";
import { api } from "./lib/api";
import type { ProjectItem } from "./components/PortfolioSection.tsx";
import type { ServiceItem } from "./components/ServicesSection.tsx";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", website: "" });
  const [publicData, setPublicData] = useState<{content:any;projects?:ProjectItem[];services?:ServiceItem[]}>({content:{}});

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === "/admin") return;
    api<{content:any;projects:ProjectItem[];services:ServiceItem[]}>('/public/site')
      .then(setPublicData)
      .catch(() => { /* Keep the original portfolio content available if the API is not configured yet. */ });
  }, [currentPath]);

  useEffect(() => {
    const seo = publicData.content?.seo;
    if (seo?.title) document.title = seo.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && seo?.description) description.setAttribute('content', seo.description);
  }, [publicData]);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0 });
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
    setFormSubmitted(false);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    try {
      await api('/contact', { method: 'POST', body: JSON.stringify(formState) });
      setFormSubmitted(true);
      window.setTimeout(() => {
        setIsContactOpen(false);
        setFormState({ name: "", email: "", message: "", website: "" });
      }, 2200);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Could not send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentPath === "/admin") return <AdminPage />;

  return (
    <div className="min-h-screen bg-brand-cream relative flex flex-col justify-between" id="app-root">
      {/* Top Navigation */}
      <Header 
        onContactClick={handleOpenContact} 
        currentPath={currentPath} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Folds */}
      <main className="w-full flex flex-col">
        {currentPath === "/about" ? (
          <AboutPage />
        ) : currentPath === "/services" ? (
          <ServicesPage items={publicData.services} onContact={handleOpenContact} title={publicData.content?.servicesPage?.title} intro={publicData.content?.servicesPage?.intro} />
        ) : (
          <>
            <Hero onTalkClick={handleOpenContact} profile={publicData.content?.profile} />
            <AboutSection />
            <AwardsSection />
            <PortfolioSection items={publicData.projects} />
            <ServicesSection items={publicData.services} />
            <TestimonialsSection />
            <ArticlesSection />
          </>
        )}
      </main>

      {/* Full Rich Footer Section */}
      <FooterSection onContactClick={handleOpenContact} profile={publicData.content?.profile} />
      <ChatWidget enabled={Boolean(publicData.content?.chatbot?.enabled)} />

      {/* Slide-over Contact Drawer (Brutalist Style) */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseContact}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
              id="contact-backdrop"
            />

            {/* Sidebar Contact Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-brand-cream border-l border-black z-50 shadow-2xl p-8 sm:p-12 flex flex-col justify-between"
              id="contact-drawer"
            >
              {/* Top Bar inside Drawer */}
              <div className="flex items-center justify-between" id="drawer-header">
                <div className="flex items-center gap-2">
                  <StarburstIcon points={8} className="w-6 h-6 text-brand-red animate-spin-slow" />
                  <span className="font-display font-black text-xl tracking-tighter uppercase text-black">
                    Let's connect
                  </span>
                </div>
                <button
                  onClick={handleCloseContact}
                  className="w-10 h-10 border border-black flex items-center justify-center rounded-none text-black hover:bg-black hover:text-white transition-all cursor-pointer font-bold font-sans text-lg"
                  id="btn-close-drawer"
                >
                  ✕
                </button>
              </div>

              {/* Form Content / Success Screen */}
              <div className="my-auto py-8" id="drawer-body">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      id="contact-form"
                    >
                      <h3 className="font-display font-extrabold text-3xl tracking-tight text-black leading-tight">
                        Tell {publicData.content?.profile?.name?.split(" ")[0] || "Prakash"} about your project idea.
                      </h3>
                      <input aria-hidden="true" tabIndex={-1} autoComplete="off" value={formState.website} onChange={(e) => setFormState({ ...formState, website: e.target.value })} className="absolute -left-[10000px] h-px w-px" name="website" />
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-white border border-black px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-brand-red text-black font-sans text-sm font-medium"
                          placeholder="e.g. Jane Doe"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-white border border-black px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-brand-red text-black font-sans text-sm font-medium"
                          placeholder="e.g. hello@website.com"
                        />
                      </div>

                      {/* Message Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-xs tracking-widest text-neutral-500 uppercase">
                          Tell me about it
                        </label>
                        <textarea
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-white border border-black px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-brand-red text-black font-sans text-sm font-medium resize-none"
                          placeholder="What awesome things are you working on?"
                        />
                      </div>

                      {/* Submit Button */}
                      {formError && <p role="alert" className="border border-red-300 bg-red-50 p-3 text-sm text-red-700">{formError}</p>}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white hover:bg-brand-red disabled:opacity-50 transition-colors duration-300 font-sans font-bold text-sm tracking-widest uppercase py-4 rounded-none cursor-pointer"
                        id="btn-submit-contact"
                      >
                        {isSubmitting ? 'Sending…' : 'Send message ✳'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 flex flex-col items-center justify-center gap-4"
                      id="submit-success-state"
                    >
                      <StarburstIcon points={16} className="w-16 h-16 text-brand-red animate-bounce" />
                      <h4 className="font-display font-black text-2xl tracking-tight text-black uppercase">
                        Message Sent!
                      </h4>
                      <p className="font-sans text-neutral-600 text-sm max-w-xs mx-auto">
                        Thank you, {formState.name}! Prakash will get back to you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Info inside Drawer */}
              <div className="border-t border-black/10 pt-6 text-xs text-neutral-500 font-sans" id="drawer-footer">
                <p className="font-medium">Direct contact:</p>
                <p className="font-bold text-black mt-0.5">{publicData.content?.profile?.email || "prakashkumawat6128@gmail.com"}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
