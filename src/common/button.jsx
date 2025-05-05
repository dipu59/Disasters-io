import { cn } from "../lib/utils";

export const Button = ({ children, className,  ...props  }) => {
  return (
    <button
    {...props }
      className={cn(
        "font-bold text-[12px] text-[#FAFAFA] bg-[#F26922] py-[17px] px-[25px] rounded-[6px] hover:shadow-orange  active:shadow-orange   transition-all duration-300 active:scale-95 ",
        className
      )}
    >
      {children}
    </button>
  );
};
