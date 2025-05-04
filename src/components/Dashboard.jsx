import React from "react";
import { DashboardInfo } from "../lib/database";
import { Title } from "../common/title";
import { Disc } from "../common/disc";

function Dashboard() {
  return (
    <main className="max-w-[1300px] mx-auto h-auto bg-white ">
      <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-[40px] ">
        {DashboardInfo.map((items, i) => (
          <li key={i} className="mb-6 mx-auto mt-3 lg:mt-0 max-w-[306px]">
            <div className="w-[306px] rounded-[20px]  overflow-hidden relative">
              <img
                src={items.path}
                className="  cursor-zoom-in transition-all hover:scale-110"
                alt=""
              />
              <div className=" absolute top-2 right-2 w-[87px] h-[36px] flex justify-center items-center  hover:bg-[#FAFAFA]/75 cursor-pointer transition-all bg-[#FAFAFA] rounded-[40px] gap-1 px-[10px] py-[14px] text-[#18181B] ">
                <img src="rain.png" className=" size-4" alt="" />
                <span className=" font-bold text-[12px]">Blizzard</span>
              </div>
            </div>
            <Title className="text-base mt-[20px]">{items.title}</Title>
            <Disc className="text-[14px] py-3  ">{items.location}</Disc>
            <Title className="text-base">{items.tk}</Title>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Dashboard;
