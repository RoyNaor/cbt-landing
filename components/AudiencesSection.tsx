"use client";
import { motion } from "framer-motion";
import {
  Baby,
  User,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Users,
} from "lucide-react";

type Audience = { title: string; icon: React.ReactNode };

const items: Audience[] = [
  { title: "מתבגרים", icon: <Users className="size-8" /> },
  { title: "סטודנטים", icon: <GraduationCap className="size-8" /> },
  { title: "מבוגרים", icon: <Briefcase className="size-8" /> },
];

export default function AudiencesSection() {
  return (
    <section id="audiences" className="scroll-mt-24" dir="rtl">
      <div className="section max-w-7xl mx-auto px-4">
        {/* רקע מעוגל גדול */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] bg-pistachio-light/25 shadow-sm ring-1 ring-black/5 px-6 md:px-10 py-12 md:py-16"
        >
          {/* כותרת */}
          <h2 className="text-center text-green-dark font-bold text-3xl md:text-4xl">
            קהל היעד שלי
          </h2>
          <p className="mt-2 text-center text-charcoal/70 text-base md:text-lg">
            הליווי מיועד למתבגרים ובוגרים המתמודדים עם אתגרים רגשיים (כגון דימוי עצמי, לחץ, חרדה, חרדת בחינות וכו') ו/או אתגרים חברתיים המבקשים שינוי, חיזוק המסוגלות העצמית וכלים להתמודדות ולצמיחה אישית.
          </p>


          {/* כרטיסים */}
          <div className="mt-10 grid gap-6 md:gap-7
                          [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="bg-white rounded-3xl shadow-sm ring-1 ring-black/5
                           px-6 py-6 md:px-8 md:py-7 flex items-center gap-4"
              >
                <div className="shrink-0 grid place-items-center size-14 rounded-2xl
                                bg-pistachio-light/70 text-green-dark">
                  {it.icon}
                </div>
                <span className="text-lg md:text-xl font-semibold text-charcoal">
                  {it.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
