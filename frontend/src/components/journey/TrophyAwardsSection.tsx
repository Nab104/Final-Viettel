"use client";

import React from "react";
import { TrophyGridOrCarousel } from "./TrophyGridOrCarousel";


export const TrophyAwardsSection: React.FC = () => {
  return (
    <section 
      className="relative bg-white overflow-hidden"
      style={{ 
        paddingTop: '160px', 
        paddingBottom: '200px', 
        minHeight: '900px' 
      }}
    >


      {/* CONTENT */}
      <div className="mx-auto max-w-[1680px] px-8 relative z-10">
        <div className="mb-16 relative inline-block">
          <h2 className="text-[#EE0033] text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase leading-tight font-beausans">
            CÚP VÀ GIẢI THƯỞNG
          </h2>
        </div>

        <TrophyGridOrCarousel />
      </div>
    </section>
  );
};
