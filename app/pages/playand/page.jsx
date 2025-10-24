"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const headings = [
    "Time to Play",
    "Safe Spaces",
    "Creative Recreation",
    "Social Development",
    "Equal Access",
    "Child Labor",
    "Sexual Exploitation",
    "Online Exploitation",
    "Economic Exploitation",
    "Illegal Activities",
  ];

  const arr_heading = [
    ["Children need regular breaks from schoolwork and chores."],
    [
      "Parks, playgrounds, sports fields, and cultural centers that are clean and child-friendly.",
    ],
    [
      "Music, art, storytelling, games, and cultural events that nurture imagination.",
    ],
    [
      "Team games, group activities, and community events build cooperation and friendship.",
    ],
    [
      "Girls, children with disabilities, and those in poor or rural areas deserve the same opportunities.",
    ],
    [
      "Being forced to work in factories, farms, shops, or households at the cost of education and health.",
    ],
    ["Abuse, trafficking, or any act that harms a child’s dignity."],
    ["Cyber-bullying, grooming, or misuse of images and data."],
    ["Unfair wages, dangerous work, or being used for profit."],
    ["Being forced into crime, begging, or armed conflict."],
  ];

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-amber-800 via-amber-900 to-black p-10 flex justify-center">
      <section className="w-full max-w-6xl bg-amber-950/90 rounded-2xl shadow-2xl p-10 space-y-10">
        {/* Page Title */}
        <h1 className="text-center text-amber-400 text-5xl md:text-6xl font-extrabold pb-6 drop-shadow-lg">
          Right to Play & Protection from Exploitation Corner
        </h1>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {headings.map((title, i) => (
            <div
              key={i}
              className="bg-[#5C2C0C] rounded-xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-200 mb-4">
                {i + 1}. {title}
              </h2>
              <ul className="list-disc list-inside space-y-2">
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
          <h2 className="text-2xl font-bold text-amber-300">
            🌟 Key Message
          </h2>
          <p className="text-amber-100 mt-2 text-lg">
            Play is not a luxury — it is a right. Protection from exploitation
            ensures that every child can grow up safe, free, and with dignity.
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
