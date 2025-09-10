"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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
    <section id="testimonials" className="scroll-mt-24 py-16 px-4 justify-center items-center" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto rounded-[32px] border border-pistachio bg-white shadow-sm px-6 md:px-10 py-12"
      >
        {/* כותרת */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark">
             המלצות
          </h2>
        </div>

        {/* קרוסלה בלי חצים */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="flex justify-center"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center min-h-[300px] md:min-h-[400px]"
            >
              <motion.blockquote
                className="w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 text-right shadow-sm border border-pistachio/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-charcoal/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  “{t.text}”
                </p>
              </motion.blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
