"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import clsx from "clsx";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export default function AnimateOnScroll({
  children,
  className,
  delay,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={clsx(
        "animate-fade-up",
        isVisible && "is-visible",
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
