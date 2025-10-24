"use client";
import React, { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Apis = () => {
  const [userData, setUserData] = useState(null);

  async function fetchUserData() {
    const res = await fetch("/api/user");
    const data = await res.json();
    setUserData(data);
    return data;
  }



  return (
    <div>
      <button
        type="button"
        onClick={createPdf}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default Apis;
