"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Children are human beings to whom respect is due, superior to us by reason of their innocence and of the greater possibilities of their future",
  "There can be no keener revelation of a society’s soul than the way in which it treats its children",
    "Children should be protected not only by law and by the justice system, but also by a culture of respect for their dignity and rights.",
    "The best way to make children good is to make them happy.",
    "A child’s life is like a piece of paper on which every person leaves a mark.",
    "Children are the world’s most valuable resource and its best hope for the future.",
    "To every child – a fair chance.",
    "Every child has the right to protection, to education, to healthcare, to a childhood.",
  "Justice for children is ensuring that every law, every court, every policy sees them not as miniature adults, but as individuals with unique rights",
    "Children are not things to be molded, but are people to be unfolded.",
];

export default function QuotesLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // changes every 3s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex justify-center items-center  h-40 bg-gray-900 text-white rounded-t-2xl">
      <p className="text-2xl font-semibold transition-opacity duration-700 ease-in-out">
        {quotes[index]}
      </p>
    </div>
  );
}
