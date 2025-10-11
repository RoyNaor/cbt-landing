"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

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
          בהכשרתי אני יועצת חינוכית המטפלת בגישה הקוגניטיבית-התנהגותית (CBT). אני עובדת עם מתבגרים ובוגרים המתמודדים עם אתגרים רגשיים וחברתיים. המטרה שלי להעניק למטופליי כלים מעשיים לשינוי דפוסי חשיבה, לחיזוק המסוגלות  ולהתמודדות יעילה עם אתגרי החיים. 

          </p>
          {/* <p className="mt-2 text-charcoal/80 max-w-2xl mx-auto md:mx-0">
            המטרה שלי היא לסייע לך לפתח הרגלים חדשים, לשנות דפוסי חשיבה ולייצר
            תוצאות אמיתיות ביום יום.
          </p> */}

          {/* כפתורים */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="btn btn-primary px-5 py-2 text-sm rounded-full w-[70%] sm:w-auto mx-auto md:mx-0"
            >
              ליצירת קשר
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-outline px-5 py-2 text-sm rounded-full w-[70%] sm:w-auto mx-auto md:mx-0"
            >
               להיכרות מעמיקה
            </button>
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

      {/* מודל */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-dark"> מידע נוסף עליי </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-charcoal/80 leading-7 text-sm md:text-base">
              <p>
                אני שרון, אמא לשלושה בנים - שני בוגרים ומתבגר ובת הזוג של עמית.
                אני יועצת חינוכית ומטפלת קוגניטיבית התנהגותית (CBT), העוסקת
                בתחומי חינוך, ייעוץ, אימון, טיפול, הנחייה והדרכה מעל ל-25 שנה
                במגוון תפקידים.
              </p>
              <p>
                אני בעלת תואר שני (M.A) בייעוץ חינוכי ורישיון ייעוץ קבוע, תעודה בפסיכותרפיה קוגניטיבית התנהגותית (CBT) 
                , תואר שני נוסף בקרימינולוגיה (M.A), תעודה באימון אישי והכשרת מאמנים, תואר ראשון (B.A)  בחינוך ולשון, תעודת הוראה בלשון ותעודה בניהול משאבי אנוש והדרכה. בנוסף במהלך כל השנים אני ממשיכה ללמוד ולהתפתח,
                 דרך קורסים,
                 השתלמויות והכשרות מתוך אמונה שהלמידה חשובה לצמיחה ולהתפתחות המקצועית והאישית ולא נעצרת אף פעם.
              </p>
              <p>
                דרכי המקצועית עוברת דרך תפקידים מגוונים ומשמעותיים כגון הוראה וחינוך כולל נוער בסיכון וחינוך מיוחד, מנהלת השכלה של תוכנית היל"ה ביחידה לקידום נוער במודיעין,
                 מנחת השכלה בתוכנית היל"ה מחוז ירושלים, מובילת פורום יועצות על יסודי במודיעין, מנחת השתלמות בתוכנית "בוחרים בחיים" 
                 של משרד החינוך העוסקת בחיזוק החוסן ובהעברת ידע מציל חיים בנושא דיכאון ומניעת אובדנות, מנחת סופרוויז'ן
                 ליועצות בתחילת דרכן, רכזת יועצות וחברת צוות הניהול המצומצם של בית הספר.
              </p>
              <p>
                במהלך השנים זכיתי להוביל וללוות תלמידים, הורים וצוותי חינוך וייעוץ ,
                 באופן אישי ובקבוצות. אני רואה בעבודתי שליחות ואתגר, ואוהבת לעבוד עם אנשים ממגוון רחב של אוכלוסיות.
                 בכל מפגש אני רואה את האדם מולי ומשתדלת להביא מניסיוני תוך שילוב של מקצועיות,
                 רגישות, הקשבה אמפתית ואמונה גדולה בכוחו של כל אדם לצמוח, לשנות ולמצוא את הדרך הנכונה עבורו.
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
