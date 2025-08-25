"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* תמונת רקע – באנר נמוך */}
      <div className="relative h-[220px] md:h-[300px]">
        <Image
          src="https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="גלי ים שקטים"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay כללי עדין */}
        <div className="absolute inset-0 bg-green-900/20" />
        {/* Overlay צדדי כהה */}
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3 bg-gradient-to-l from-green-950/55 via-green-900/35 to-transparent" />
      </div>

      {/* תוכן הבאנר */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0 flex items-center"
        dir="rtl"
      >
        <div className="sectionHero w-full px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] items-center gap-6">
            {/* קופסה חצי שקופה קטנה יותר */}
            <div className="inline-block max-w-md rounded-2xl bg-white/40 backdrop-blur-[3px] ring-1 ring-white/25 p-3 md:p-5 text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white drop-shadow-md">
                טיפול CBT
              </h1>
              <p className="mt-1 text-sm md:text-base text-black/95 drop-shadow-md leading-snug">
                טיפול ממוקד וקצר מועד להתמודדות עם חרדה, דיכאון, OCD וסטרס — בקצב שלך
                ובאווירה מכילה.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-green-dark text-white text-sm hover:opacity-90 transition"
                >
                  קבעו פגישה
                </a>
                <a
                  href="#services"
                  className="px-4 py-2 rounded-full border border-white/80 text-white text-sm hover:bg-white/10 transition"
                >
                  למה CBT?
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
