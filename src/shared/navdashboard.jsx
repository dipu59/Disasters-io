import React from "react";
import { Disc } from "../common/disc";
import { Title } from "../common/title";
import { Plus, Search } from "lucide-react";
import { Button } from "../common/button";

const Navdashboard = ({titleText='Dashboard', buttonText=' Cypher AI', disc='Welcome Back', Icon: Icon, onClick}) => {
  return (
    <main className=" bg-[#E4E4E780]/50 ">
      <div className=" max-w-[1268px] px-5 lg:px-0 mx-auto flex flex-col lg:flex-row lg:justify-between  lg:items-center pb-[23px]">
        <div className="py-4 lg:py-0">
          <Disc className="text-[12px]">{disc }</Disc>
          <Title>{ titleText}</Title>
        </div>
        <div className="flex flex-wrap gap-[14px]  ">
          <div className="">
            <div className="text-[#71717A] text-sm flex items-center justify-center border border-[#E4E4E7]  gap-[5px] pl-[10px] active:ring-2 hover:ring-2  max-w-[190px]   rounded-[6px] bg-[#FAFAFA] ">
              <Search className="size-[18px] " />
              <input 
                placeholder="Search incident"
                type="text"
                className=" rounded-[6px] outline-none py-[0px] max-w-[157px]  h-[42px] bg-[#FAFAFA]"
              />
            </div>
          </div>
          <button  className="w-[148px] h-[42px] bg-[#FAFAFA] border border-[#E4E4E7] rounded-[6px] text-[12px] text-[#A1A1AA] active:scale-95 transition-all  ">
            Sort By: Date modified
          </button>
          <Button onClick={onClick} className="lg:py-0 w-full  px-[25px] lg:h-[42px] md:w-fit flex justify-center items-center gap-1 ">
            <span> {Icon && <Plus className="w-4 h-4" strokeWidth='4px'  />}</span>
           {buttonText}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Navdashboard;
