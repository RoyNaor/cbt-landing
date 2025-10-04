"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { 
    q: "איך נראה התהליך?", 
    a: "התהליך מותאם לכל מטופל/ת, והוא כולל פגישת היכרות ואבחון ראשוני, הגדרת מטרות אישיות, עבודה על שינוי דפוסי חשיבה והתנהגות, למידת כלים מעשיים, פיתוח כישורי התמודדות  וליווי בתהליך להשגת ההתקדמות הרצויה." 
  },
  { 
    q: "על מה מתבסס הטיפול?", 
    a: "טיפול CBT (טיפול קוגניטיבי-התנהגותי) הוא טיפול קצר וממוקד המסייע לזהות ולשנות דפוסי מחשבה והרגלי התנהגות שמקשים על האדם. הטיפול מתמקד בהווה ובפתרון בעיות, ומבוסס על ההבנה שהפרשנות שלנו למציאות משפיעה על רגשותינו ותגובותינו יותר מהסיטואציה עצמה. גם דפוסי חשיבה שאינם משרתים אותנו נוטים להישמר, ולכן הטיפול מתמקד בזיהוי, בהבנה ובבניית דרכי חשיבה והתנהגות חדשות, חיוביות ומסתגלות, להתמודדות יעילה יותר עם האתגרים היומיומיים." 
  },
  { 
    q: "איך מטפלים בפועל?", 
    a: "בתהליך הנעשה בגישה הקוגניטיבית התנהגותית   מזהים דפוסי חשיבה שליליים, מגדירים מטרות, ומפתחים דרכי חשיבה והתנהגויות חדשות ומועילות יותר. המטופל משתף פעולה באופן פעיל ומקבל משימות מעשיות, במטרה להביא לשינוי מהיר ומשמעותי." 
  },
  { 
    q: "מה מייחד את CBT לעומת טיפולים אחרים?", 
    a: "טיפול CBT  מוכח מחקרית, קצר מועד, ממוקד מטרה ובקושי ספציפי, יעיל במגוון קשיים, מתמקד בהווה ומאפשר שינוי ושיפור פרקטי ומשמעותי בחיי היום-יום." 
  },
  { 
    q: "תוך כמה זמן מרגישים שינוי?", 
    a: "כבר לאחר מספר מועט של מפגשים בטיפול CBT ניתן להתחיל לזהות דפוסי מחשבה שליליים ותגובות חדשות. שינוי משמעותי תלוי במורכבות הקושי ובשיתוף הפעולה של המטופל. הטיפול מאפשר שינוי מחשבתי והתנהגותי, שיפור פרקטי בחיי היום-יום ושימור התוצאות לאורך זמן." 
  },
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
