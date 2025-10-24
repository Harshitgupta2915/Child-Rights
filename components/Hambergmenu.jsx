"use client"
import React, { useState } from "react";

export default function Hambergmenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-4">
      <nav className="bg-gray-900 p-4 rounded-xl shadow-lg">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl flex items-center gap-2 focus:outline-none"
        >
          <span className="text-3xl">☰</span> All
        </button>

        {open && (
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
