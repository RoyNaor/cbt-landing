"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* תמונת רקע – באנר נמוך */}
      <div className="relative h-[220px] md:h-[300px]">
        <Image
          src="/banner_cbt.jpg"
          alt="גלי ים שקטים"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay כללי עדין */}
        <div className="absolute inset-0 bg-green-900/20" />
        {/* Overlay צדדי כהה (מגביה ניגודיות באזור הטקסט) */}
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
            {/* קופסת טקסט חצי שקופה לשיפור קריאות */}
            <div className="rounded-2xl bg-white/40 backdrop-blur-[3px] ring-1 ring-white/25 p-4 md:p-6">
              <h1 className="text-xl md:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                בין מחשבה למציאות  טמון החופש לשנות.
              </h1>
              <p className="mt-2 text-black/95 md:text-lg drop-shadow-md">
                להבין את המחשבות, ללמוד מהחוויות ולגלות דרכים חדשות - צעד אחר צעד, לחיים של צמיחה ואיזון.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-green-dark text-white hover:opacity-90 transition"
                >
                  קבעו פגישה
                </a>
                <a
                  href="#services"
                  className="px-5 py-2.5 rounded-full border border-white/80 text-white hover:bg-white/10 transition"
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
