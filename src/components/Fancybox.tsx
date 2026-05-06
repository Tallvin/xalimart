"use client"; 

import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Fancybox(props: {
  children: React.ReactNode;
  delegate?: string;
  options?: any;
}) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    // Cette partie ne s'exécutera que dans le navigateur
    NativeFancybox.bind(delegate, props.options || {});

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, props.options]);

  return <>{props.children}</>;
}