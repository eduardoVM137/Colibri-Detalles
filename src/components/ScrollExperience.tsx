"use client";

import { useEffect } from "react";

function Hummingbird({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 180 120" aria-hidden="true">
      <g className="bird-wings">
        <path d="M78 61C54 44 44 19 48 3c20 12 35 31 43 54" />
        <path d="M86 61C77 38 81 15 94 2c8 22 7 42-1 60" />
      </g>
      <path d="M31 72c23-19 43-23 65-13 18-8 34-2 41 11l39 7-38 2c-13 22-42 28-64 13-17-12-29-13-53-7 8-6 11-9 10-13Z" />
      <circle cx="132" cy="68" r="2.2" />
    </svg>
  );
}

export function ScrollExperience() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".service-card, .project-card, .page-hero > *, .about-section > *, .section-heading, .footer > *, .soft-close"
    );
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      (element as HTMLElement).style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    elements.forEach((element) => observer.observe(element));

    let ticking = false;
    const updateScroll = () => {
      document.documentElement.style.setProperty("--page-scroll", `${window.scrollY}px`);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ambient-flight" aria-hidden="true">
      <Hummingbird className="ambient-bird bird-one" />
      <Hummingbird className="ambient-bird bird-two" />
    </div>
  );
}
