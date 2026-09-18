"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = revealRef.current;

    if (!element) {
      return;
    }

    element.classList.add("scroll-reveal-ready");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className={`scroll-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}