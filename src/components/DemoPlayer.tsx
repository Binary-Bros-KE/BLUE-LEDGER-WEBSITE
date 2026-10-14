"use client";

import Image from "next/image";
import { useState } from "react";
import type { DemoStep } from "@/lib/demo";

export default function DemoPlayer({ steps, video }: { steps: DemoStep[]; video: { src: string; captionsSrc: string } | null }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  if (video) {
    return <video controls playsInline preload="none" poster={steps[0].src} className="w-full"><source src={video.src} /><track kind="captions" src={video.captionsSrc} srcLang="en" label="English captions" default />Your browser does not support this video.</video>;
  }
  return (
    <div className="border border-navy/20 bg-white p-3 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/15 pb-4 text-[13px]">
        <p className="font-bold">Screenshot tour · {index + 1} of {steps.length}</p>
        <div className="flex gap-2">
          <button type="button" disabled={index === 0} onClick={() => setIndex(value => value - 1)} className="border border-navy px-3 py-2 font-bold disabled:opacity-40">Previous</button>
          <button type="button" disabled={index === steps.length - 1} onClick={() => setIndex(value => value + 1)} className="bg-navy px-3 py-2 font-bold text-cream disabled:opacity-40">Next</button>
        </div>
      </div>
      <Image src={step.src} alt={step.title} width={step.width} height={step.height} sizes="(min-width: 1200px) 1120px, calc(100vw - 88px)" className="mt-4 h-auto w-full" />
      <div aria-live="polite" className="mt-5 border-t border-navy/15 pt-5">
        <h3 className="font-display text-[24px] leading-[1.2]">{step.title}</h3>
        <p className="mt-3 text-[14px] leading-[1.8] text-navy/80">{step.text}</p>
      </div>
    </div>
  );
}
