import { Children } from "react";
import { cn } from "../lib/utils";

export const Chat = ({children, className}) => {
  return (
    <div className=" px-4 flex flex-col gap-3 bg-[#F4F4F5] ">
      <div className={cn("w-[213px] h-[57px] bg-[#3F3F46] text-white self-end mb-[15px]  rounded-[7px]", className)}>
        <p className="text-[12px] leading-[19px]  px-3 py-2 ">
          {children}
        </p>
      </div>
    </div>
  );
};
