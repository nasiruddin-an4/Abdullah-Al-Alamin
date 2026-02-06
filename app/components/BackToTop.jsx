"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center w-12 h-12 rounded-full 
          bg-white text-blue-600 border border-slate-200
          shadow-xl transition-all duration-300 ease-in-out
          hover:bg-blue-50 hover:scale-110 hover:shadow-2xl
          active:scale-95 cursor-pointer
          ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 stroke-[2.5px]" />
      </button>
    </div>
  );
};

export default BackToTop;
