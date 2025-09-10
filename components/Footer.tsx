"use client";
import { useState } from "react";
import { Phone, Mail, MessageSquareText, MapPin } from "lucide-react";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  const form = e.currentTarget; // שמור את הטופס לפני ה-await
  const formData = new FormData(form);

  try {
    const res = await fetch("/api/sendMail", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      form.reset(); // עכשיו זה עובד
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  } finally {
    setLoading(false);
  }
}


  return (
    <>
      <div id="contact" className="h-0 scroll-mt-28" aria-hidden />
      <footer dir="rtl" className="bg-green-dark/95 text-white">
        <div className="section max-w-7xl mx-auto px-4 py-14">
          <div className="grid gap-10 lg:gap-12 md:grid-cols-2 items-start">
            {/* טקסט + טופס */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">בואו נדבר</h3>
              <p className="mt-2 text-white/80">
                השאירו פרטים ואחזור אליכם לתיאום שיחה ראשונית ללא עלות.
              </p>

              <form
                className="mt-7 grid gap-4 max-w-xl"
                onSubmit={handleSubmit}
              >
                {/* שם מלא */}
                <input
                  name="name"
                  required
                  placeholder="שם מלא"
                  className="w-full rounded-xl bg-white text-charcoal placeholder-charcoal/50
                             px-4 py-3 ring-1 ring-black/10 shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* טלפון */}
                <input
                  name="phone"
                  required
                  placeholder="טלפון"
                  className="w-full rounded-xl bg-white text-charcoal placeholder-charcoal/50
                             px-4 py-3 ring-1 ring-black/10 shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* אימייל */}
                <input
                  name="email"
                  type="email"
                  placeholder="אימייל"
                  className="w-full rounded-xl bg-white text-charcoal placeholder-charcoal/50
                             px-4 py-3 ring-1 ring-black/10 shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* הודעה */}
                <textarea
                  name="message"
                  rows={4}
                  placeholder="כמה מילים על מה תרצו לעבוד"
                  className="w-full rounded-xl bg-white text-charcoal placeholder-charcoal/50
                             px-4 py-3 ring-1 ring-black/10 shadow-sm resize-y
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {/* כפתור */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center rounded-full
                             px-6 py-3 text-base font-semibold
                             bg-amber-400 text-charcoal hover:bg-amber-300
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-green-dark/95
                             transition disabled:opacity-50"
                >
                  {loading ? "שולח..." : "שליחה"}
                </button>

                {/* חיווי */}
                {status === "success" && (
                  <p className="text-green-400 mt-2">✅ ההודעה נשלחה בהצלחה</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-2">❌ שגיאה בשליחה, נסה שוב</p>
                )}
              </form>
            </div>

            {/* כרטיס יצירת קשר */}
            <div className="md:justify-self-end w-full max-w-md">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-7">
                <ul className="space-y-4 text-white">
                  <li className="flex items-center gap-3">
                    <Phone className="size-5 shrink-0 text-white/80" />
                    <a
                      className="underline-offset-4 hover:underline"
                      href="tel:0544840571"
                    >
                      054-4840571
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageSquareText className="size-5 shrink-0 text-white/80" />
                    <a
                      className="underline-offset-4 hover:underline"
                      href="https://wa.me/972544840571"
                      target="_blank"
                    >
                      שליחת הודעת וואטסאפ
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-5 shrink-0 text-white/80" />
                    <a
                      className="underline-offset-4 hover:underline break-all"
                      href="mailto:sharonnaor10@gmail.com"
                    >
                      sharonnaor10@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-5 shrink-0 text-white/80" />
                    <span> מודיעין מכבים-רעות </span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-white/10 text-sm text-white/70">
                  © {new Date().getFullYear()} כל הזכויות שמורות
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
