"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const headings = ["Right to Health", "Right to Protection"];

  const Health = [
    "Free or affordable healthcare: Access to doctors, nurses, hospitals, and medicines without discrimination.",
    "Clean water and sanitation: Safe drinking water, clean toilets, and waste-free surroundings to prevent disease.",
    "Good nutrition: Healthy meals at home, school, and during emergencies (no child should suffer from malnutrition or hunger).",
    "Preventive care: Regular health check-ups, vaccinations, and early treatment of illnesses.",
    "Healthy environment: Clean air, pollution control, safe housing, and green spaces for play.",
    "Mental health support: Counseling, stress management, and love to grow emotionally strong.",
    "Health education: Information on hygiene, exercise, reproductive health, and avoiding harmful habits like smoking or substance abuse.",
  ];

  const Protection = [
    "Violence and abuse: Physical punishment, emotional harm, neglect, or sexual abuse.",
    "Exploitation: Child labor, child trafficking, forced marriage, or being used for illegal activities.",
    "Bullying: Harassment in schools, playgrounds, or online spaces (cyberbullying).",
    "Online dangers: Unsafe internet content, predators, and misuse of personal information.",
    "Unsafe surroundings: Dangerous workplaces, harmful chemicals, unsafe roads, or war zones.",
    "Emergencies: Special protection and healthcare during natural disasters, conflicts, or pandemics.",
    "Discrimination: Equal protection for children with disabilities, girls, refugees, and minority groups.",
  ];

  const arr_heading = [Health, Protection];
  const icons = ["🏥", "🛡️"];

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-amber-800 via-amber-900 to-black p-10 flex justify-center">
      <section className="w-full max-w-6xl bg-amber-950/90 rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-center text-amber-400 text-6xl font-extrabold pb-6 drop-shadow-lg">
          Right to Health & Protection Corner
        </h1>

        {/* Grid for Health & Protection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {headings.map((title, i) => (
            <div
              key={i}
              className="bg-[#5C2C0C] rounded-xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-200 mb-4 flex items-center gap-2">
                <span className="text-3xl">{icons[i]}</span> {title}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {arr_heading[i].map((item, j) => (
                  <li
                    key={j}
                    className="text-amber-100 text-lg leading-relaxed pl-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Key Message */}
        <div className="mt-12 p-6 bg-black/60 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-amber-300">🌟 Key Message</h2>
          <p className="text-amber-100 mt-2 text-lg">
            Health and Protection are every child’s basic rights. A safe body,
            safe mind, and safe environment ensure they grow into strong and
            confident individuals.
          </p>
        </div>

        {/* Return Button */}
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
