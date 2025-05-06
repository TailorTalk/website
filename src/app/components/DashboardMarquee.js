"use client";

import { ThreeDMarquee } from "./ui/3d-marquee";


export function ThreeDMarqueeDemoSecond() {
    const images = [
        "/marqueeImages/agent_access_token.png",  // not visible
        "/marqueeImages/agent_access_token.png",  // not visible
        "/marqueeImages/agent_access_token.png",  // not visible
        "/marqueeImages/agent_access_token.png",
        "/marqueeImages/Pricing.png",
        "/marqueeImages/Campaign.png",
        "/marqueeImages/HeroSection.png",
        "/marqueeImages/Agent_settings.png",
        "/marqueeImages/HeroSection.png",  // not visible
        "/marqueeImages/HeroSection.png",  // not visible
        "/marqueeImages/HeroSection.png",  // not visible
        "/marqueeImages/agent_settings1.png",
        "/marqueeImages/HeroSection.png",
        "/marqueeImages/Dashboard.png",
        "/marqueeImages/Pricing.png",
        "/marqueeImages/guide.png",
        "/marqueeImages/Agent_settings.png", // not visible
        "/marqueeImages/Agent_settings.png", // not visible
        "/marqueeImages/Agent_settings.png", // not visible
        "/marqueeImages/Dashboard.png",
        "/marqueeImages/Agent_settings.png",
        "/marqueeImages/Campaign.png",
        "/marqueeImages/HeroSection.png",
        "/marqueeImages/guide.png", // not visible
        "/marqueeImages/guide.png", // not visible
        "/marqueeImages/guide.png", // not visible
        "/marqueeImages/guide.png", // not visible
        "/marqueeImages/Pricing.png", // not visible
        "/marqueeImages/Pricing.png", // not visible
        "/marqueeImages/Pricing.png",
        "/marqueeImages/guide.png",
        "/marqueeImages/guide.png", // not visible
      ];
  return (
    <div
      className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2
        className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-5xl">
        Revolutionize Your Customer Conversations with{" "}
        <span
          className="relative z-20 inline-block rounded-xl bg-indigo-500/40 px-4 py-1 text-white underline decoration-indigo-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            TailorTalk
        </span>
      </h2>
      <p
        className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Achieve a 40% sales boost, 60% faster support resolution, and 30% cost savings—powered by our AI agent 
        and delivered in weeks, not months.
      </p>
      <div
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Start Your Trial
        </button>
        <button
          className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>
      {/* overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images} />
    </div>
  );
}
