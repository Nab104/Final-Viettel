"use client";

import React, { memo } from "react";
import Image from "next/image";
import { FormerDirector } from "../data";

interface DirectorModalProps {
  director: FormerDirector;
  onClose: () => void;
}

const DirectorModal = ({ director, onClose }: DirectorModalProps) => {
  return (
    <div className="fixed inset-0 z-[2147483647] bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-4 animate-in fade-in duration-300 font-beausans">


      <div className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row p-6 md:p-10 items-center gap-8">
        {/* Inside Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-[60] p-1 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        {/* Image Card */}
        <div className="w-full md:w-[38%] aspect-square md:aspect-[4/5] relative rounded-[24px] overflow-hidden shadow-lg">
          <Image 
            src={director.img} 
            alt={director.name} 
            fill 
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top" 
            onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"} 
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[62%] flex flex-col justify-center text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] uppercase leading-tight mb-3 tracking-tight">
            {director.name}
          </h2>
          <div className="h-1 w-12 bg-[#EE0033] mb-6"></div>
          <div className="space-y-1">
            <p className="text-gray-700 font-medium text-base md:text-lg leading-tight">{director.role}</p>
            <p className="text-gray-700 font-medium text-base md:text-lg leading-tight">{director.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DirectorModal);
