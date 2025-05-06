import React from "react";
import { Title } from "../../common/title";
import { Disc } from "../../common/disc";
import { Button } from "../../common/button";
import { GetStartedPage } from "../../lib/database";
import { Link } from "react-router-dom";
function Getstarted() {
  return (
    <div>
      <div className="max-w-[815px] mx-auto my-[40px] md:my-[80px] ">
        <Title className="text-center text-[32px] ">Let's get started</Title>
        <Disc className="max-w-[468px] flex justify-self-center text-[12px] md:text-base px-3 md:px-0 font-normal leading-[26px] pt-[14px] ">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
          general sac mascho werhoLorem ipsum dolar sit gene
        </Disc>

        {/* Verticle line create with stepbar */}
        <div className="max-w-[609px] px-5 md:px-0 h-[29px] flex mx-auto pb-[20px] pt-[33px] ">
          <div className="w-[598px] h-[3px] bg-[#E4E4E7] flex justify-between items-center ">
            <div className="bg-[#E4E4E7] size-[29px] rounded-full "></div>
            <div className="bg-[#E4E4E7] size-[29px] rounded-full "></div>
            <div className="bg-[#E4E4E7] size-[29px] rounded-full "></div>
          </div>
        </div>

        {/* Card Section Start */}
        <div className="max-w-[815px]  h-[300px]  flex items-center mt-4  overflow-x-auto snap-x snap-mandatory ">
          <div className="flex mx-auto">
            {GetStartedPage.map((items, index) => (
              <div
                key={index}
                className=" mx-auto  flex-shrink-0 max-w-[235px] h-[269px] rounded-[10px] py-[25px] px-[20px] bg-[#E4E4E7] cursor-pointer hover:shadow-lg transition-all lg:hover:-translate-y-4 border-2 border-[#E4E4E7] duration-300 delay-75 snap-start scroll-ml-6 justify-start ml-4 "
              >
                <img src={items.path} alt={items.alt} />
                <Title className="text-[20px] leading-[29px] mt-[68px] ">
                  {items.title}
                </Title>
                <Disc className="text-sm leading-[22px] ">{items.disc}</Disc>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex h-full w-full justify-center items-center mt-[65px] ">
          <Link to="/incidents/step2">
            <Button className="w-[139px] h-[42px] py-0 ">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
