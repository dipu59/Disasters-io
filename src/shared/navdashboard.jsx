import React from "react";
import { Disc } from "../common/disc";
import { Title } from "../common/title";
import { Search } from "lucide-react";
import { Button } from "../common/button";

const Navdashboard = () => {
  return (
    <main className=" bg-[#E4E4E780]/50 ">
      <div className=" max-w-[1268px] px-5 lg:px-0 mx-auto flex flex-col lg:flex-row justify-between items-center pb-[23px]">
        <div>
          <Disc className="text-[12px]">Welcome Back</Disc>
          <Title>Dashboard</Title>
        </div>
        <div className="flex flex-wrap gap-[14px]">
          <div className="text-[#71717A] text-sm flex items-center justify-center border border-[#E4E4E7]  gap-[5px] pl-[10px] active:ring-2 hover:ring-2  max-w-[190px]   rounded-[6px] bg-[#FAFAFA]/50 ">
            <Search className="size-[18px]" />
            <input
              placeholder="Search incident"
              type="text"
              className=" outline-none py-[17px] max-w-[157px]  h-[42px] bg-[#FAFAFA]/50"
            />
          </div>
          <button className="w-[148px] h-[42px] bg-[#FAFAFA]/50 border border-[#E4E4E7] rounded-[6px] text-[12px] text-[#A1A1AA] active:scale-95 transition-all shadow ">
            Sort By: Date modified
          </button>
          <Button className='py-0 px-[25px] '>Cypher AI</Button>
        </div>
      </div>
    </main>
  );
};

export default Navdashboard;
