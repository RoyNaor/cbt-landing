"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section" dir="rtl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* טקסט */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-center md:text-right"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-green-dark mb-2">
            מי אני?
          </h2>
          <h3 className="text-lg md:text-2xl font-bold text-green-dark">
            שרון נאור, מטפלת CBT
          </h3>

          <p className="mt-4 leading-7 md:leading-8 text-charcoal/80 max-w-2xl mx-auto md:mx-0">
            אני מטפלת קוגניטיבית-התנהגותית (CBT), בעלת ניסיון בעבודה עם
            מתבגרים ומבוגרים בתחומי חרדה, דיכאון, OCD וניהול סטרס. הגישה שלי
            משלבת כלים מעשיים, חמלה ומותאמת אישית לכל אדם.
          </p>
          <p className="mt-2 text-charcoal/80 max-w-2xl mx-auto md:mx-0">
            המטרה שלי היא לסייע לך לפתח הרגלים חדשים, לשנות דפוסי חשיבה ולייצר
            תוצאות אמיתיות ביומיום.
          </p>

          {/* כפתורים */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="btn btn-primary px-5 py-2 text-sm rounded-full w-[70%] sm:w-auto mx-auto md:mx-0"
            >
              ליצירת קשר
            </a>
            <a
              href="#contact"
              className="btn btn-outline px-5 py-2 text-sm rounded-full w-[70%] sm:w-auto mx-auto md:mx-0"
            >
              למידע נוסף
            </a>
          </div>
        </motion.div>

        {/* תמונה */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="mx-auto max-w-xs md:max-w-none aspect-[4/3] overflow-hidden rounded-3xl shadow bg-gray-light">
            <img
              src="/therapist.jpg"
              alt="המטפלת"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
