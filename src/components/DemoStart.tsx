"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import type { DemoStep } from "@/lib/demo";

const DemoPlayer = dynamic(() => import("./DemoPlayer"), { ssr: false, loading: () => <p role="status" className="p-6 text-sm">Opening the walkthrough…</p> });

export function DemoStart({ steps, video, children }: { steps: DemoStep[]; video: { src: string; captionsSrc: string } | null; children: ReactNode }) {
  const [started, setStarted] = useState(false);
  return started ? <DemoPlayer steps={steps} video={video} /> : (
    <div className="relative overflow-hidden border border-navy/20 bg-navy">
      {children}
      <div className="absolute inset-0 flex items-center justify-center bg-navy/25 p-5">
        <button type="button" onClick={() => setStarted(true)} className="max-w-full border border-cream/40 bg-navy px-6 py-4 text-sm font-bold leading-relaxed text-cream shadow-[4px_4px_0_var(--color-gold)]">{video ? "Play product demo" : "Open the screenshot tour"} <span aria-hidden="true">▶</span></button>
      </div>
    </div>
  );
}
