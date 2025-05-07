import React from "react";
import LocationBar from "../shared/locationbar";
import { LocationEditIcon, MapPin, Plus } from "lucide-react";
import { Disc } from "../common/disc";
import { Title } from "../common/title";
import Locations from "./Locationscards";
import ActiveCards from "./Activecards";
import DocumentsCard from "./Documents";

function Location() {
  return (
    <div>
      <LocationBar
        titleText="DR-4699 March 2023 Severe Storms"
        Icon={Plus}
        buttonText=" New Location"
        disc="Incidents - DR-4699 March 2023 Severe Storms "
        to="https://www.google.co.in/maps/@22.347776,87.310336,10z?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D"
      />

      <section className="max-w-[1300px] mx-auto px-3 lg:px-0  my-[40px] ">
        <div className=" grid grid-cols-12 justify-between gap-8  ">
          {/* Left side / Discription */}
          <div className=" col-span-12 lg:col-span-7 max-w-[680px]">
            {/* Location And Approx */}
            <div className="flex gap-3  items-center">
              <div className="size-[37px] rounded-full bg-[#F4F4F5] flex justify-center items-center cursor-pointer">
                <img src="/location.png" alt="" />
              </div>
              <div>
                <Disc>Location</Disc>
                <Title className="text-lg md:text-[20px]">
                  Tulare County, Los Angles, CA 23415
                </Title>
              </div>
            </div>

            <div className="flex gap-3  items-center mt-[45px]">
              <div className="size-[37px] rounded-full bg-[#F4F4F5] flex justify-center items-center cursor-pointer">
                <img src="/cinina.png" alt="" />
              </div>
              <div>
                <Disc>Approx. Cost:</Disc>
                <Title className=" text-lg md:text-[20px]">
                  $60,607,456.00
                </Title>
              </div>
            </div>

            {/* Discription */}
            <div className="max-w-[677px] py-[40px] border-t border-b my-[40px]">
              <Title className="text-sm">Discription</Title>
              <Disc className="mt-[15px] text-xs md:text-base ">
                Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
                sit general sac mascho werhoLorem ipsum dolar sit general sac
                mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
                ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
                general sac mascho werho
              </Disc>
            </div>

            {/* Location Cards */}
            <Locations />
            {/* Actives Cards */}
            <ActiveCards />
            {/* Documents Card */}
            <DocumentsCard />
          </div>

          {/* Right side / Location image  */}
          <div className=" col-span-12 lg:col-span-5 max-w-[526px] ">
            <Disc className="mb-5">Incident Map</Disc>
            <img src="/map.png" alt="" />
            <div className="flex gap-6 mt-5">
              <Disc className="text-sm md:text-base">Start 19.1232, -118.233 </Disc>
              <Disc className="text-sm md:text-base"> End 19.3245, -119.2323</Disc>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
