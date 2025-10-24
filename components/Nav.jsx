"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  House,
  UserRound,
  FolderKanban,
  Users,
  Phone,
  ChevronRight,
  ChartColumnDecreasing,
  ClipboardClock,
} from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
const router = useRouter();
  return (
    <header className="w-full h-30 text-[#D6D6F5] text-2xl bg-[#1A1B41] backdrop-blur-xl flex justify-between items-center border-b border-gray-300 sticky top-0 z-[100] px-5 py-2 rounded-b-2xl">
      
      {/* Menu Button + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-[#D6D6F5]] text-2xl flex items-center gap-2 focus:outline-none hover:opacity-90 hover:scale-101"
        >
          <span className="text-3xl">☰</span>
        </button>                    

        {open && (
          <div className="absolute top-12 left-0 bg-white text-black shadow-lg rounded-l-xl p-4 w-90">
            <h1></h1>
            <ul className="space-y-3">
              {[
                "Learn about Child Rights",
                "File a Complaint",
                "Donation for Kids",
                "Give your location",
                "Complaint Status",
                " NGO's near your location",
                "Study about NGO's",

              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center hover:text-red-400 cursor-pointer text-2xl font-semibold"
                >
                  {item} <ChevronRight size={18} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Navigation Links */}
      
        <h2 onClick={()=>router.back()} className="flex items-center hover:scale-101 hover:opacity-90  cursor-pointer">
          <  House className="mr-2" /> Home
        </h2>
        <h2 className="flex items-center hover:scale-101 hover:opacity-90 h cursor-pointer">
          <ChartColumnDecreasing className="mr-2" /> Knoweledge graph
      </h2>
      <Link href="\pages\childissues">
        <h2 className="flex items-center hover:scale-101 hover:opacity-90 h cursor-pointer">
          <FolderKanban className="mr-2" /> Child Issues
        </h2></Link>
        <h2 className="flex items-center hover:scale-101 hover:opacity-90 h cursor-pointer">
          <ClipboardClock className="mr-2" /> Track your complaint
      </h2>
      <Link href="\pages\contact">
        <h2 className="flex items-center hover:scale-101 hover:opacity-90 h cursor-pointer">
          <Phone className="mr-2" /> Contact
        </h2></Link>
      
    </header>
  );
};

export default Nav;
