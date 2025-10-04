"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { text: `בזכות הטיפול למדתי כלים שממש עובדים ביומיום. ממליצה בחום!` },
  { text: `גישה רגישה ומעשית. סוף סוף מרגיש שינוי אמיתי.` },
  { text: `קיבלתי סדר וכלים פשוטים לחרדה. תודה ענקית!` },
  {
    text: `שרון היקרה,
תודה רבה על כל העזרה, השיחות והחיבוקים
אני מרגישה בת מזל על שהייתי לצדך.
עם לב כל כך גדול.
בהערכה אדירה
תודה ענקית
ואהבה גדולה`,
  },
  {
    text: `לשרון,
בבית הספר יש כל כך הרבה תלמידים, אנשים שונים שחיים חיים שונים.
הדבר המיוחד שהופך את בית הספר שלנו ל...
תודה לך שהיית שם בשבילי והזכרת לי כמה חשוב גם לדאוג לעצמי ולקירובים לי.`,
  },
  {
    text: `לשרון,
רציתי לומר לך תודה.
תודה על ההקשבה שלך
תודה על התמיכה שלך
אפילו כשבאתי אלייך בספונטניות תמיד מצאת את הזמן להיות לי לאוזן קשבת ומצפן.
את עזרת לי המון, עזרת לי ללמוד איך לאסוף את עצמי מחדש...`,
  },
  {
    text: `שרון,
רק רציתי להגיד לך תודה
תודה על כל העזרה
תודה על ההתעניינות והדאגה
תודה שתמיד היית שם בשבילי כששהייתי צריכה (גם כשלא).
נהניתי לדבר ולהתייעץ איתך על כל מיני דברים...
שוב תודה על הכל

...המבחניות עברו מצוין (לשון 95, מתמטיקה 97, אנגלית 94) והיא הייתה רגועה...
היא אפילו הפסיקה ללמוד ניגשת לטסט ומשתמשת בכלים שקיבלה ממך.

תודה רבה.`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* כותרת */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark">
            המלצות
          </h2>
        </div>

        {/* גריד כרטיסיות */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white border border-pistachio/50 shadow-sm p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <FaQuoteLeft className="text-green-dark text-4xl mb-4" />
              <p className="text-charcoal/90 text-base leading-relaxed whitespace-pre-line">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
