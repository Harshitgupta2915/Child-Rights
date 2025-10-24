"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const headings = [
    "1. Speak Freely",
    "2. Write, Draw, or Create",
    "3. Participate in Decisions",
    "4. Access Information",
    "5. Respectful Listening",
    "6. Freedom of Creative Expression",
    "7. Form Groups or Clubs",
    "8. Cultural & Language Expression",
    "9. Question & Debate",
    "10. Be Heard in All Matters Affecting Them",
  ];

  const Expression = [
    "Share opinions on family matters, school rules, or community issues.",
    "Express ideas through art, stories, or social media (with guidance).",
    "Be heard in matters affecting them (like education, healthcare, or home life).",
    "Receive correct and age-appropriate information to form their own views.",
    "Adults must listen and take children’s views seriously.",
    "Access books, media, and digital platforms to learn and express views safely.",
    "Express ideas through art, music, dance, drama, or social media without unfair censorship.",
    "Join or create student councils, clubs, or child-led organizations to share ideas collectively.",
    "Speak their mother tongue, practice their culture, and celebrate traditions freely.",
    "Ask questions, suggest solutions, and discuss opinions with teachers, parents, or leaders.",
    "Decisions about education, health care, family life, or community planning should consider their opinions.",
  ];

  // Icons for each heading
  const icons = [
    "🎤",
    "✍️",
    "🗳️",
    "📚",
    "👂",
    "🎨",
    "🤝",
    "🌍",
    "❓",
    "📢",
  ];

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-amber-800 via-amber-900 to-black p-10 flex justify-center">
      <section className="w-full max-w-6xl bg-amber-950/90 rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-center text-amber-400 text-6xl font-extrabold pb-6 drop-shadow-lg">
          Right to Expression Corner
        </h1>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {headings.map((title, i) => (
            <div
              key={i}
              className="bg-[#5C2C0C] rounded-xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-200 mb-4 flex items-center gap-2">
                <span className="text-3xl">{icons[i]}</span> {title}
              </h2>
              <p className="text-amber-100 text-lg leading-relaxed">
                {Expression[i]}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-black/60 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-amber-300">🌟 Key Message</h2>
          <p className="text-amber-100 mt-2 text-lg">
            The Right to Expression empowers children to speak, create, and be
            heard — shaping their lives and the society around them.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex items-center justify-center pt-6">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 text-2xl text-amber-400 bg-black rounded-xl 
                       font-bold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Return
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
