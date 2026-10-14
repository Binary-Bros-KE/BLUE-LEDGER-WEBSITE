"use client";

import { useEffect, useRef, useState } from "react";

export default function ScreenshotViewer({ src, width, height, alt, caption, onDismiss }: {
  src: string; width: number; height: number; alt: string; caption: string; onDismiss: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [actualSize, setActualSize] = useState(false);
  useEffect(() => {
    const element = dialog.current!;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    closeButton.current?.focus();
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog ref={dialog} aria-label={`Full screenshot: ${alt}`} onClose={onDismiss} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="m-auto max-h-[94dvh] w-[96vw] max-w-[1600px] overflow-auto border border-navy/25 bg-cream p-0 text-navy shadow-xl backdrop:bg-navy/85">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/20 p-4">
        <p className="max-w-[700px] text-[13px] font-bold leading-relaxed">{alt}</p>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setActualSize(value => !value)} aria-pressed={actualSize} className="border border-navy px-3 py-2 text-xs font-bold">{actualSize ? "Fit width" : "Actual size"}</button>
          <button ref={closeButton} type="button" onClick={() => dialog.current?.close()} aria-label="Close screenshot" className="bg-navy px-4 py-2 text-sm font-bold text-cream">Close ×</button>
        </div>
      </div>
      <div className="max-h-[70dvh] overflow-auto bg-white p-2">
        {/* Load the original only after opening; actual size supports panning on phones. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} className="mx-auto h-auto" style={{ width: actualSize ? width : "100%", maxWidth: actualSize ? "none" : width }} />
      </div>
      <div className="space-y-2 border-t border-navy/20 p-4 text-[13px] leading-relaxed">
        <p>{caption}</p>
        <p>Choose Actual size to read the screen, then scroll to inspect its details.</p>
        <a href={src} target="_blank" rel="noopener noreferrer" className="inline-block text-blue underline underline-offset-4">Open original image in a new tab</a>
      </div>
    </dialog>
  );
}
