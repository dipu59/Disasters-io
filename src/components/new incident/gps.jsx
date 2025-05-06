import React from "react";
import NewIncident from "../../shared/newincident";
import { Title } from "../../common/title";
import { Disc } from "../../common/disc";
import { Search } from "lucide-react";

function Gps() {
  return (
    <section className="mb-72">
      <NewIncident to2="/incidents/step3" to="/incidents" />
      <div className="max-w-[752px] mx-auto mt-[40px] px-4 lg:px-0">
        <Title className="text-[24px] mb-[12px]">Where’s the incident?</Title>
        <Disc className="mb-[24px] text-sm">
          Enter a GPS, address. or pin point on the map. Try to be as accurate
          as possible, or click:Jurisdiction Wide
        </Disc>
        <div className=" relative">
          <div className="max-w-[752px]">
            <img
              src="/gps.png"
              className=" object-right-bottom object-cover rounded w-[752px] h-[490px]"
              alt=""
            />
          </div>
          <div className=" absolute space-y-[5px] top-0 p-[10px] w-[254px]">
            <div className="flex items-center border rounded-[6px] h-[42px] border-[#E4E4E7] bg-[#F4F4F5] w-full text-[12px] text-[#71717A] overflow-hidden  ">
              <Search className="size-[18px] m-[5px]" />
              <input
                type="text"
                className=" w-full outline-none bg-[#F4F4F5]  h-full   "
                placeholder="Enter incident address or GPS"
              />
            </div>
            <div className="flex items-center border rounded-[6px] h-[42px] border-[#E4E4E7] bg-[#F4F4F5] w-full text-[12px] text-[#71717A] overflow-hidden  ">
              <Search className="size-[18px] m-[5px]" />
              <input
                type="text"
                className=" w-full outline-none bg-[#F4F4F5]  h-full   "
                placeholder="Pinpoint damage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gps;
