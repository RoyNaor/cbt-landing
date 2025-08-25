"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow bg-gray-light">
            <img
              src="/therapist.jpg"
              alt="המטפלת"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
            מי אני?
          </h2>
          <h3 className="text-3xl md:text-2xl font-bold text-green-dark">
            שרון נאור, מטפלת CBT
          </h3>
          <p className="mt-4 leading-8 text-charcoal/80">
            אני מטפלת קוגניטיבית-התנהגותית (CBT), בעלת ניסיון בעבודה עם
            מתבגרים ומבוגרים בתחומי חרדה, דיכאון, OCD וניהול סטרס. הגישה שלי
            משלבת כלים מעשיים, חמלה ומותאמת אישית לכל אדם.
          </p>
          <p className="mt-2 text-charcoal/80">
            המטרה שלי היא לסייע לך לפתח הרגלים חדשים, לשנות דפוסי חשיבה ולייצר
            תוצאות אמיתיות ביומיום.
          </p>
          <a href="#contact" className="btn btn-primary mt-6 ml-4">
            ליצירת קשר
          </a>
          <a href="#contact" className="btn btn-outline mt-6">
            למידע נוסף
          </a>
        </motion.div>
      </div>
    </section>
  );
}
