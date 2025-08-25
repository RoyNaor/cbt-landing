"use client";
import { motion } from "framer-motion";

const testimonials = [
  { q: "בזכות הטיפול למדתי כלים שממש עובדים ביומיום. ממליצה בחום!", a: "נ., 34" },
  { q: "גישה רגישה ומעשית. סוף סוף מרגיש שינוי אמיתי.", a: "א., 29" },
  { q: "קיבלתי סדר וכלים פשוטים לחרדה. תודה ענקית!", a: "ת., 41" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto rounded-[32px] border border-pistachio bg-white shadow-sm px-6 md:px-10 py-12"
      >
        {/* כותרת */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark">
           מטופלים מספרים
          </h2>
        </div>

        {/* כרטיסים */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="rounded-2xl bg-white p-6 md:p-8 text-center shadow-sm border border-pistachio/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-charcoal/90 leading-relaxed">“{t.q}”</p>
              <footer className="mt-4 text-sm font-medium text-green-dark">
                {t.a}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
