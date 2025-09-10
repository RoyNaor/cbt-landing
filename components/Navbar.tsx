"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // גובה קשיח לפי מסך + בלי ריווח אנכי
      className={`sticky top-0 z-50 backdrop-blur-md ${
        scrolled ? "bg-white/90 shadow-sm" : "bg-white/40"
      } h-[9vh] md:h-[10vh] min-h-12 relative`}
    >
        {/* nav תופס את כל הגובה, בלי padding אנכי */}
        <nav className="navbar-container h-full flex items-center justify-between py-0">
          {/* לוגו – נשאר גדול, ממלא את הגובה של ה־navbar */}
          <div className="h-full flex items-center shrink-0">
            <a
              href="#hero"
              onClick={handleClick("#hero")}
              className="h-full flex items-center cursor-pointer select-none"
            >
              <Image
                src="/Logo_CBT.png"
                alt="CBT Logo"
                width={90}
                height={50}
                priority
              />
              <div className="flex flex-col justify-center leading-tight ml-2">
                <span className="text-[15px] md:text-base font-semibold text-green-dark">
                  שרון נאור · מטפלת CBT
                </span>
              </div>
            </a>
        </div>

        {/* קישורים לדסקטופ – ללא תרומה לגובה (leading-none) */}
        <ul className="hidden md:flex h-full items-center gap-8 text-[15px] leading-none">
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

        {/* CTA – גובה קבוע קטן כדי לא להגדיל את ה־navbar */}
        <a
          href="#contact"
          onClick={handleClick("#contact")}
          className="hidden md:inline-flex h-9 items-center justify-center px-5 text-sm rounded-md bg-green-dark text-white hover:opacity-90 transition leading-none"
        >
          קבעו פגישה
        </a>

        {/* המבורגר במובייל – מיושר לגובה ה־navbar */}
        <button
          className="md:hidden h-full grid place-items-center text-green-dark text-2xl ml-1 leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="פתח תפריט"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* תפריט מובייל – ממוקם מיד מתחת ל־navbar */}
      {menuOpen && (
        <motion.ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-2 p-4 text-base"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleClick(l.href)}
                className={`block py-2 ${
                  active === l.href ? "text-green-dark font-medium" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <a
              href="#contact"
              onClick={handleClick("#contact")}
              className="block px-4 py-2 bg-green-dark text-white rounded-md text-center"
            >
              קבעו פגישה
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
}
