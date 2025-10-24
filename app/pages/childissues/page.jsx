"use client"
import React, { useState } from "react";

// Single-file React page component using TailwindCSS
// Exports a default React component that renders a searchable, filterable
// list of child-related issues with short descriptions and expandable details.

export default function Page() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [expanded, setExpanded] = useState(null);

  const issues = [
    {
      id: 1,
      title: "Child Malnutrition",
      category: "Nutrition",
      short: "Inadequate intake of calories, protein, or micronutrients.",
      details:
        "Malnutrition includes undernutrition (wasting, stunting), micronutrient deficiencies, and overweight. Causes: poverty, food insecurity, poor feeding practices, illness. Early detection and appropriate feeding programs reduce long-term harm.",
    },
    {
      id: 2,
      title: "Lack of Access to Education",
      category: "Education",
      short: "Barriers that prevent children from attending quality school.",
      details:
        "Barriers include poverty, long distances to school, child labor, gender discrimination, lack of trained teachers, and conflict. Solutions include conditional cash transfers, school feeding, flexible learning and community schools.",
    },
    {
      id: 3,
      title: "Child Abuse and Neglect",
      category: "Protection",
      short: "Physical, emotional, sexual abuse or neglect harming development.",
      details:
        "Signs include unexplained injuries, withdrawal, sudden behaviour changes, poor hygiene, and school avoidance. Prevention needs safe caregiving, child protection systems, awareness campaigns and reporting pathways.",
    },
    {
      id: 4,
      title: "Child Labor",
      category: "Protection",
      short: "Work that deprives children of education or is hazardous.",
      details:
        "Hazardous and exploitative labour harms health and education. Policies, social protection for families, enforcement of labour laws and access to education help reduce child labour.",
    },
    {
      id: 5,
      title: "Mental Health Challenges",
      category: "Mental Health",
      short: "Anxiety, depression, trauma and other psychosocial issues.",
      details:
        "Children exposed to violence, displacement, or household stress may develop anxiety, PTSD, or depression. Early psychosocial support, school-based interventions and family support are key.",
    },
    {
      id: 6,
      title: "Infectious Diseases & Immunization Gaps",
      category: "Health",
      short: "Preventable illnesses due to low vaccination or weak health systems.",
      details:
        "Diseases such as measles, diarrhoea and pneumonia remain leading causes of child death where vaccination and primary care are weak. Strengthening routine immunization and access to care saves lives.",
    },
    {
      id: 7,
      title: "Early and Forced Marriage",
      category: "Protection",
      short: "Marriage under 18 that cuts short childhood and schooling.",
      details:
        "Early marriage increases risks of maternal mortality, drops out of school and limits opportunities. Laws, community engagement and economic options for girls reduce rates.",
    },
  ];

  const categories = Array.from(new Set(issues.map((i) => i.category)));

  function toggleFilter(cat) {
    const next = new Set(activeFilters);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    setActiveFilters(next);
  }

  const filtered = issues.filter((i) => {
    const matchesQuery =
      query.trim() === "" ||
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.short.toLowerCase().includes(query.toLowerCase()) ||
      i.details.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilters.size === 0 || activeFilters.has(i.category);
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            Child Issues — Overview
          </h1>
          <p className="mt-2 text-slate-600">
            A concise, searchable list of common issues affecting children with
            short descriptions and suggested focus areas. Use the search box or
            the category filters to narrow results.
          </p>
        </header>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search issues, symptoms, keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="mt-3 lg:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => { setQuery(""); setActiveFilters(new Set()); setExpanded(null); }}
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-sm"
            >
              Reset
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span className="hidden lg:inline">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleFilter(cat)}
                  className={`px-3 py-2 rounded-lg text-sm border shadow-sm ${
                    activeFilters.has(cat)
                      ? "bg-indigo-600 text-white border-indigo-700"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <main>
          {filtered.length === 0 ? (
            <div className="p-8 rounded-lg bg-white border border-slate-200 text-center">
              <p className="text-slate-700">No issues match your search.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((issue) => (
                <article
                  key={issue.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {issue.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">{issue.short}</p>
                      <div className="mt-3 text-xs inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {issue.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setExpanded(expanded === issue.id ? null : issue.id)}
                        className="px-3 py-2 rounded-lg border border-slate-200 bg-white shadow-sm text-sm"
                        aria-expanded={expanded === issue.id}
                      >
                        {expanded === issue.id ? "Hide" : "Details"}
                      </button>
                    </div>
                  </div>

                  {expanded === issue.id && (
                    <div className="mt-4 text-sm text-slate-700 leading-relaxed">
                      <p>{issue.details}</p>

                      <ul className="mt-3 space-y-2 list-disc list-inside text-slate-600">
                        <li><strong>Focus:</strong> Prevention, early detection, community support.</li>
                        <li><strong>Who can help:</strong> caregivers, schools, health workers, social services.</li>
                        <li><strong>Next steps:</strong> awareness, referrals, safe reporting channels, local programs.</li>
                      </ul>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </main>

        <footer className="mt-8 text-sm text-slate-600">
          <p>
            This page is a general educational summary. For country-specific data,
            policies, or emergency assistance, contact local health and child
            protection services.
          </p>
        </footer>
      </div>
    </div>
  );
}
