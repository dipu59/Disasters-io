import { Children } from "react";
import { cn } from "../lib/utils";

export const Title = ({ className, children }) => {
  return (
    <h1 className={cn(" font-bold text-[26px] text-[#09090B] ", className)}>
      {children}
    </h1>
  );
};
