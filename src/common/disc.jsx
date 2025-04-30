import React from "react";
import { cn } from "../lib/utils";

export const Disc = ({ children, className }) => {
  return <p className={cn("text-[#71717A] text-base leading-[22px]", className)}>{children}</p>;
};
