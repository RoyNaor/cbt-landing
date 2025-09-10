"use client";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Sparkles, Brain } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: AlertTriangle, title: "חרדות", href: "/services/anxiety" },
  { icon: RefreshCcw, title: "OCD", href: "/services/ocd" },
  { icon: Sparkles, title: "דימוי עצמי", href: "/services/self-esteem" },
  { icon: Brain, title: "התמודדות עם לחץ", href: "/services/stress" },
];

function Card({
  Icon,
  title,
  href,
}: {
  Icon: any;
  title: string;
  href: string;
}) {
  return (
    <div className="group rounded-3xl bg-white border border-emerald-100 shadow-sm px-5 py-6 text-center transition-all duration-300 hover:shadow-lg">
      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-pistachio text-green-dark">
        <Icon size={22} />
      </div>
      <div className="font-semibold text-charcoal">{title}</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" dir="rtl" className="section bg-gray-light rounded-[2.5rem]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-dark"> תחומי הטיפול </h2>
        <p className="mt-3 text-charcoal/80">הטיפול מותאם אישית עם כלים קצרים, ברורים ויישומיים.</p>
      </div>

      {/* מובייל – גריד רגיל */}
      <div className="md:hidden mx-auto max-w-4xl grid grid-cols-2 gap-4">
        {items.map(({ icon: Icon, title, href }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <Card Icon={Icon} title={title} href={href} />
          </motion.div>
        ))}
      </div>

      {/* דסקטופ – Overlapping / Stack */}
      <div className="hidden md:flex justify-center">
        <div className="relative flex -space-x-8 rtl:space-x-reverse">
          {items.map(({ icon: Icon, title, href }, i) => {
            const y = i % 2 === 0 ? -8 : 14;     // זיגזג אנכי קל
            const r = i % 2 === 0 ? -1.5 : 1.5;  // סיבוב עדין
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: y + 24, rotate: r }}
                whileInView={{ opacity: 1, y, rotate: r }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative w-[260px] shrink-0"
                style={{ zIndex: items.length - i }}
              >
                <div className="transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-0 hover:[&]:z-50">
                  <Card Icon={Icon} title={title} href={href} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
