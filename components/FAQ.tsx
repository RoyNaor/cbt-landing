"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "מה זה CBT?", a: "CBT היא גישה טיפולית שממוקדת בשינוי דפוסי חשיבה והתנהגות דרך תרגול וכלים מעשיים." },
  { q: "איך נראה תהליך?", a: "פגישת היכרות, הגדרת מטרות, עבודה שבועית עם משימות בית וכלים יישומיים." },
  { q: "תוך כמה זמן מרגישים שינוי?", a: "לעיתים כבר לאחר מספר שבועות. הקצב תלוי במטרות ובתרגול בין המפגשים." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-gray-light rounded-[2.5rem] mb-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-dark">
          שאלות ותשובות
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="mb-3 overflow-hidden rounded-2xl border border-pistachio/40 bg-white"
          >
            <button
              onClick={() => setOpen((prev) => (prev === i ? null : i))}
              className="w-full text-right px-5 py-4 font-semibold flex items-center justify-between"
            >
              <span>{item.q}</span>
              <span className="text-green-dark">{open === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 pb-5 text-charcoal/80"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
