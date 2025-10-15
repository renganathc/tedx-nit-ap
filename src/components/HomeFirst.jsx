"use client";

import React from "react";
import Image from "next/image";
import { Syne } from "next/font/google";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import to from "../../public/images/1(2).svg";
import GetYourTickets from "./GetYourTickets";

const syne = Syne({ subsets: ["latin"] });

export default function HomeFirst() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">

      {/* main container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto gap-10">
        
        <div className="flex flex-col items-start gap-6">

          <div className="relative">
            <h1 className={`text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-tight ${syne.className} animate-text-reveal`} >
              TESSELATE
            </h1>
            <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-gradient-to-r from-red-500 to-yellow-400 animate-line-expand"></span>
          </div>

          {/* subtitl e */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-xl leading-relaxed animate-fadein">
            From <span className="font-semibold text-white">Fragments</span>{" "}
            <span className="inline-flex items-center">
              <Image src={to} alt="to" width={27} height={27} className="w-6 sm:w-7 relative top-1" />
              <span className="text-red-500 font-bold  relative top-1 right-[2px] text-2xl">o</span>
            </span>{" "}
            <span className="font-semibold text-white">Form</span>.  
            A celebration of ideas, innovation, and imagination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up">
            {[
              { Icon: AiOutlineCalendar, text: "1st November, 2 PM - 6 PM, 2025" },
              { Icon: IoLocationOutline, text: "NIT Andhra Pradesh" },
              { Icon: CiUser, text: "6 Speakers" },
            ].map(({ Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-xl p-3 px-5 shadow-lg hover:scale-105 transition-transform duration-300 border border-white/10"
              >
                <Icon size={26} className="text-red-500" />
                <span className="text-sm sm:text-base font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 animate-pop-in">
            <GetYourTickets />
          </div>
        </div>

        <div className="relative w-full md:w-[45%] overflow-hidden rounded-3xl shadow-2xl animate-fadein-slow">
          <Image src="/images/main_page_image.png" className="w-full max-w-[1200px] h-auto object-contain object-center" width={1200}      // actual image width
    height={1200} 
          />
          </div>
      </div>

    </section>
  );
}
