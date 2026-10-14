"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";

const ScreenshotViewer = dynamic(() => import("./ScreenshotViewer"), { ssr: false, loading: () => <p role="status" className="p-3 text-sm">Opening screenshot…</p> });

export function ScreenshotPreview({ src, width, height, alt, caption, children }: {
  src: string; width: number; height: number; alt: string; caption: string; children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href={src} target="_blank" rel="noopener noreferrer" onClick={event => { event.preventDefault(); setOpen(true); }} aria-label={`Enlarge screenshot: ${alt}`} className="group block cursor-zoom-in focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue">
        {children}
        <span className="flex items-center justify-between gap-3 border-t border-navy/15 bg-cream px-4 py-3 text-[12px] font-bold leading-relaxed text-navy group-hover:bg-white">View full screenshot <span aria-hidden="true">↗</span></span>
      </a>
      {open && <ScreenshotViewer src={src} width={width} height={height} alt={alt} caption={caption} onDismiss={() => setOpen(false)} />}
    </>
  );
}
