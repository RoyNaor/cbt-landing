"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "אודותיי" },
  { href: "#services", label: " תחומי התמחות " },
  { href: "#audiences", label: "קהל יעד" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#faq", label: "שאלות ותשובות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(links[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // מאזין לגלילה כדי לזהות באיזה סקשן המשתמש נמצא
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 backdrop-blur-md ${
        scrolled ? "bg-white/90 shadow-sm" : "bg-white/40"
      }`}
    >
      <nav className="navbar-container flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="h-10 w-30 rounded-lg bg-pistachio grid place-items-center text-[20px] font-bold text-green-dark">
            LOGO
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-md relative">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onClick={handleClick(l.href)}
                  className={`transition ${
                    isActive ? "text-green-dark" : "hover:text-green-dark"
                  }`}
                >
                  {l.label}
                </a>

                {isActive && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-green-dark"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={handleClick("#contact")}
          className="px-8 py-2.5 text-sm rounded-lg bg-green-dark text-white hover:opacity-90 transition hidden md:inline-flex"
        >
          קבעו פגישה
        </a>
      </nav>
    </motion.header>
  );
}
