"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const headings = [
    "Survival and Development Rights",
    "Protection Rights",
    "Participation Rights",
  ];

  const SurvivalRights = [
    "Right to a name, nationality, and identity.",
    "Right to live with parents unless it’s against the child’s best interests.",
    "Right to family reunification if separated.",
    "Right to an adequate standard of living (food, clothing, housing).",
    "Right to health and healthcare.",
    "Right to social security and assistance.",
    "Right to benefit from scientific progress.",
    "Right to play, rest, and leisure.",
    "Right to education (primary education must be free and compulsory; secondary accessible to all).",
    "Right to access information and mass media that benefit development.",
    "Rights for children with disabilities to special care, education, and training.",
  ];

  const ProtectionRights = [
    "Protection from all forms of violence, abuse, neglect, or exploitation.",
    "Protection from torture or degrading treatment.",
    "Protection from child labor that is hazardous or interferes with education.",
    "Protection from sexual exploitation and abuse.",
    "Protection from trafficking, sale, and abduction.",
    "Protection in armed conflict — no child under 15 should take part in hostilities or be recruited into armed forces.",
    "Protection from harmful drugs and drug trafficking.",
    "Protection from exploitation in the justice system (e.g., no life imprisonment without parole for children).",
    "Protection of refugee and asylum-seeking children.",
    "Protection of children belonging to minorities or indigenous groups.",
  ];

  const ParticipationRights = [
    "Right to freedom of expression.",
    "Right to freedom of thought, conscience, and religion.",
    "Right to freedom of association and peaceful assembly.",
    "Right to access information.",
    "Right to participate in cultural and artistic life.",
    "Right to be heard in legal and administrative proceedings affecting them.",
  ];

  const arr_heading = [SurvivalRights, ProtectionRights, ParticipationRights];

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#F7D78B] to-[#F7B733] flex items-center justify-center p-10">
      {/* Left column with stacked cards */}
      <aside className="hidden xl:flex flex-col space-y-40 absolute left-6 top-1/10 w-72">
        <div className="bg-white/90 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">📌 Did you know?</h3>
          <p className="text-sm text-gray-700">
            The UNCRC was adopted in 1989 and is the most widely ratified human
            rights treaty in history.
          </p>
        </div>
        <div className="bg-[#5C2C0C] text-[#F7B733] rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold mb-2">💡 Quote</h3>
          <p className="italic text-sm">
            "Children are the world's most valuable resource and its best hope
            for the future." – John F. Kennedy
          </p>
        </div>
        <div className="bg-amber-100 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">📊 Stats</h3>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            <li>1 in 3 children worldwide lack official birth registration.</li>
            <li>Over 260 million children are out of school.</li>
            <li>150+ million children are engaged in child labor.</li>
          </ul>
        </div>
        <div className="bg-green-100 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">🌱 Health Fact</h3>
          <p className="text-sm text-gray-700">
            Vaccinations save an estimated 4 million children’s lives every year
            worldwide.
          </p>
        </div>
      </aside>

      {/* Right column with stacked cards */}
      <aside className="hidden xl:flex flex-col space-y-40 absolute right-6 top-1/7 w-72">
        <div className="bg-[#5C2C0C] text-[#F7B733] rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold mb-2">⚖️ Quick Facts</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Education is free & compulsory at least till primary level.</li>
            <li>No child should be discriminated against.</li>
            <li>Every child has the right to survival and development.</li>
          </ul>
        </div>
        <div className="bg-white/90 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">📚 Learn More</h3>
          <p className="text-sm text-gray-700">
            Visit UNICEF and the UNCRC resources to explore more about
            children's rights and global progress.
          </p>
        </div>
        <div className="bg-amber-200 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">🌍 Fun Fact</h3>
          <p className="text-sm text-gray-700">
            Almost every country in the world has ratified the UNCRC — except
            one!
          </p>
        </div>
        <div className="bg-blue-100 rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-[#5C2C0C] mb-2">🎓 Education</h3>
          <p className="text-sm text-gray-700">
            Every child has the right to free primary education. Secondary
            education must be made accessible to all.
          </p>
        </div>
      </aside>

      {/* Main content */}
      <section className="w-full max-w-5xl bg-[#5C2C0C] rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-center text-[#F7B733] text-5xl font-extrabold drop-shadow-lg">
          Fundamental Rights of Children
        </h1>

        {headings.map((title, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#FDF5E6] border-b border-[#F7B733] pb-2">
              {title}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {arr_heading[i].map((item, j) => (
                <li key={j} className="text-[#FFFFFF] text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex items-center justify-center pt-6">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 text-xl text-[#F7B733] bg-black rounded-xl 
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
