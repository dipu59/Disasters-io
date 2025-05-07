import React from "react";
import { Disc } from "../common/disc";
import { Title } from "../common/title";
import { Plus, Search, X } from "lucide-react";
import { Button } from "../common/button";
import { Link } from "react-router-dom";

const NewIncident = ({
  titleText = "New Incident",
  buttonText = "Next step",
  disc = "Home - Incidents - New Incident",
  Icon: Icon,
  onClick,
  to2,
  ...props
}) => {
  return (
    <main className=" bg-[#E4E4E780]/50 ">
      <div className=" max-w-[1268px] px-5 lg:px-0 mx-auto flex flex-col lg:flex-row lg:justify-between  lg:items-center items-start pb-[23px]">
        <div className="flex gap-3 items-center justify-center">
          <Link to="/incidents">
            <div className="p-3 bg-[#FAFAFA] rounded-full size-[41px] border border-[#E4E4E7] cursor-pointer active:scale-95 transition-all duration-300 hover:animate-spin ">
              <X className="size-4 text-[#71717A]" />
            </div>
          </Link>
          <div className="py-4 lg:py-0">
            <Disc className="text-[12px]">{disc}</Disc>
            <Title>{titleText}</Title>
          </div>
        </div>
        <div className="flex h-[40px] gap-[14px]  ">
          <Link to={to2}>
            <button className="w-[129px] hover:shadow-lg h-[42px] bg-[#FAFAFA] border border-[#E4E4E7] rounded-[6px] text-[12px] text-[#71717A] font-bold active:scale-95 transition-all  ">
              Back
            </button>
          </Link>
          <Link {...props} className="flex w-full md:w-fit">
            <Button
              onClick={onClick}
              className="lg:py-0  px-[27px] lg:h-[42px] md:w-fit flex justify-center items-center gap-1 shadow-sm "
            >
              <span>
                {Icon && <Plus className="w-4 h-4" strokeWidth="4px" />}
              </span>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NewIncident;
