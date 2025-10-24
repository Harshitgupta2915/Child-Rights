"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const headings = [
    "1. Fundamental Right",
    "2. Age Group Covered",
    "3. Free and Compulsory Education",
    "4. Quality Education",
    "5. No Discrimination",
    "6. Special Needs Children",
    "7. Prohibition of Child Labour",
    "8. Curriculum & Learning",
    "9. Role of Parents and Community",
    "10. Global Perspective",
  ];

  const Fundamental = [
    "The Right to Education ensures that every child has the right to free and compulsory education.",
    "In India, this is guaranteed under Article 21A of the Constitution.",
  ];
  const Agegroup = [
    "The RTE Act, 2009 provides free education to all children between 6 to 14 years of age.",
  ];
  const Free_Education = [
    "No child is required to pay any fee or charges for schooling in government schools.",
    "It is the duty of the government to ensure that every child goes to school.",
  ];
  const Quality_education = [
    "Schools must meet basic standards such as proper classrooms, trained teachers, safe drinking water, and toilets.",
    "The focus is on equal and quality education for all children.",
  ];
  const descrimination = [
    "Children cannot be discriminated against based on caste, religion, gender, or economic status.",
    "Private schools must reserve 25% of seats for children from economically weaker sections.",
  ];
  const special_Needschildren = [
    "Children with disabilities also have the right to free education and appropriate support.",
  ];
  const child_Labour = [
    "The Act discourages child labour by ensuring children are in schools instead of workplaces.",
  ];
  const Curriculum = [
    "The syllabus should promote overall development, free thinking, and a stress-free learning environment.",
  ];
  const Parents_role = [
    "Parents are encouraged to send children to school, and School Management Committees include parents to monitor progress.",
  ];
  const Global_perspective = [
    "The Right to Education is recognized internationally under the UN Convention on the Rights of the Child (UNCRC), making education a basic human right worldwide.",
  ];

  const arr_heading = [
    Fundamental,
    Agegroup,
    Free_Education,
    Quality_education,
    descrimination,
    special_Needschildren,
    child_Labour,
    Curriculum,
    Parents_role,
    Global_perspective,
  ];

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-amber-800 via-amber-900 to-black p-10 flex justify-center">
      {/* Left floating info box */}
   

      {/* Main Content */}
      <section className="w-full max-w-5xl bg-amber-950/90 rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-center text-amber-400 text-6xl font-extrabold pb-6 drop-shadow-lg">
          Right to Education Corner
        </h1>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {headings.map((title, i) => (
            <div
              key={i}
              className="bg-[#5C2C0C] rounded-xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-200 mb-4">
                {title}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {arr_heading[i].map((item, j) => (
                  <li
                    key={j}
                    className="text-amber-100 text-lg leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-black/60 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-amber-300">🌟 Key Takeaway</h2>
          <p className="text-amber-100 mt-2 text-lg">
            Education is not a privilege—it’s a right. The RTE Act ensures every
            child in India gets equal access to learning and growth.
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
