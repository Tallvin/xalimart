"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

export default function CounterNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // Déclenche une seule fois
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 2 });
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}