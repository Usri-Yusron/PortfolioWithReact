"use client";

import RetroGrid from "../ui/background-retro";
import { InteractiveIcons } from "./Interactive-icon";

export function MainTechnology() {
  return (
    <div className="relative flex px-4 h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        technologies that I can use
      </span>
      <InteractiveIcons/>

      <RetroGrid />
    </div>
  );
}
