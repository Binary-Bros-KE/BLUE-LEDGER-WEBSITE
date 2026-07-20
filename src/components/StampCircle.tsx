/** The rotated dashed-circle "stamp" motif — used for the Hero's "OPEN SALE" badge and the Offline
 * Manifesto's "OFFLINE" badge. Always gold on a dark (navy) background. */
export function StampCircle({
  children,
  size = 130,
  rotate = "rotate-8",
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex flex-none ${rotate} flex-col items-center justify-center rounded-full border-2 border-dashed border-gold text-center text-sm leading-tight font-extrabold tracking-[0.1em] text-gold ${className}`}
    >
      {children}
    </div>
  );
}
