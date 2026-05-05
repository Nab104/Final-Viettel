"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Province } from "../data";

interface ProvinceModalProps {
  province: Province;
  activeStoreIndex: number;
  slideDirection: number;
  isMobile: boolean;
  onClose: () => void;
  onPrevStore: () => void;
  onNextStore: () => void;
}

const ProvinceModal = ({ 
  province, 
  activeStoreIndex, 
  slideDirection, 
  isMobile, 
  onClose, 
  onPrevStore, 
  onNextStore 
}: ProvinceModalProps) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) onNextStore();
      else onPrevStore();
    }
    setTouchStart(null);
  };

  const currentStore = province.stores[activeStoreIndex];

  const getScale = () => {
    const s = currentStore.scale;
    if (!s) return 1.25;
    if (typeof s === 'number') return s;
    if (typeof s === 'string') {
      if (s.startsWith('scale-[')) return parseFloat(s.replace('scale-[', '').replace(']', ''));
      if (s === 'scale-150') return 1.5;
      if (s === 'scale-125') return 1.25;
      if (s === 'scale-110') return 1.1;
      if (s === 'scale-100') return 1.0;
    }
    return 1.25;
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(5, 5, 5, 0.3)',
        backgroundImage: 'url("/images/provinces/background_hethongsieuthi.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        touchAction: 'pan-y'
      }}
      className="fixed inset-0 z-[2147483647] flex flex-col items-center justify-around py-16 px-4 backdrop-blur-md font-beausans"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#EE0033]/[0.07] rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#EE0033]/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-50 w-full text-center mb-6 md:mb-8 pt-12 md:pt-0">
        {/* Inside Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-6 md:right-10 z-[60] text-white/50 hover:text-[#EE0033] transition-all hover:scale-110 duration-300 p-2 md:p-3 bg-white/5 hover:bg-white/20 rounded-full cursor-pointer shadow-xl border border-white/10 backdrop-blur-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <h2 className="font-beausans font-black text-base md:text-2xl lg:text-3xl uppercase tracking-[0.1em] px-4 leading-tight opacity-80" style={{ color: '#FFFFFF' }}>
          {currentStore.id.includes('CH')
            ? `TẬP THỂ CÁC CỬA HÀNG TẠI TỈNH ${province.name}`
            : `TẬP THỂ CÁC SIÊU THỊ TẠI TỈNH ${province.name}`}
        </h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-y-4 md:gap-y-8 w-full animate-in fade-in zoom-in-90 duration-1000 delay-200 overflow-hidden">
        <div className="relative flex items-center justify-center w-full max-w-[1300px] px-4 md:px-0">
          {province.stores.length > 1 && (
            <>
              <button
                onClick={onPrevStore}
                className="absolute -left-2 md:-left-20 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2"
              >
                <ChevronLeft size={isMobile ? 32 : 70} strokeWidth={2.5} />
              </button>
              <button
                onClick={onNextStore}
                className="absolute -right-2 md:-right-20 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-[#EE0033] transition-all transform hover:scale-110 p-2"
              >
                <ChevronRight size={isMobile ? 32 : 70} strokeWidth={2.5} />
              </button>
            </>
          )}

          <div 
            className="relative rounded-[2.5rem] overflow-hidden isolation-isolate transform translate-z-0 flex items-center justify-center shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-white/10 bg-black/40 group"
            style={{ 
              width: 'min(1100px, 96vw)', 
              height: 'clamp(320px, 55vh, 550px)',
              borderRadius: '2.5rem',
              position: 'relative'
            }}
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={`blur-${activeStoreIndex}`}
                  variants={{
                    enter: { opacity: 0 },
                    center: { opacity: 0.4 },
                    exit: { opacity: 0 }
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <Image
                    src={encodeURI(currentStore.img)}
                    alt=""
                    fill
                    sizes="10vw"
                    className="object-cover blur-2xl"
                    style={{ 
                      objectPosition: currentStore.objectPosition || 'center',
                      transform: `scale(${getScale()})`
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence initial={false}>
                <motion.div
                  key={activeStoreIndex}
                  variants={{
                    enter: { opacity: 0 },
                    center: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 w-full h-full shadow-2xl"
                >
                  <Image
                    unoptimized
                    quality={100}
                    src={encodeURI(currentStore.img)}
                    alt={province.name}
                    fill
                    sizes="(max-width: 768px) 95vw, 850px"
                    priority
                    className={`${currentStore.objectFit || 'object-cover'}`}
                    style={{ 
                      objectPosition: currentStore.objectPosition || 'center',
                      transform: `scale(${getScale()}) translate(${currentStore.translateX || '0px'}, ${currentStore.translateY || '0px'})`
                    }}
                    onError={(e) => e.currentTarget.src = "/images/logo-viettel-store.png"}
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-2 md:mt-4">
          <h3 className="relative z-50 font-beausans font-bold text-xl md:text-4xl tracking-wide opacity-60 text-white">
            {currentStore.id.includes('CH')
              ? `Cửa hàng ${currentStore.id}`
              : `Siêu thị ${currentStore.id}`}
          </h3>
        </div>
      </div>


    </div>
  );
};

export default memo(ProvinceModal);
