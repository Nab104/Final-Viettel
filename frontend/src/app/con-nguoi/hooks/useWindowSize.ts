"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout;

    const handleResize = (immediate = false) => {
      const update = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      if (immediate) {
        update();
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(update, 150);
      }
    };

    window.addEventListener("resize", () => handleResize(false));
    handleResize(true); // Initialize on mount immediately

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
}
