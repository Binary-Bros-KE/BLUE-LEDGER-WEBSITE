const MAX_WIDTH_CLASSES = {
  xl: "max-w-[1200px]",
  lg: "max-w-[1100px]",
  md: "max-w-[900px]",
  sm: "max-w-[820px]",
  xs: "max-w-[760px]",
} as const;

export function Container({
  children,
  className = "",
  size = "xl",
}: {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof MAX_WIDTH_CLASSES;
}) {
  return <div className={`mx-auto w-full ${MAX_WIDTH_CLASSES[size]} ${className}`}>{children}</div>;
}
