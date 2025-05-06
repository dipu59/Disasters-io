import React, { useState } from "react";
import NewIncident from "../../shared/newincident";
import { Title } from "../../common/title";
import { NewIncidentCards } from "../../lib/database";
import { Disc } from "../../common/disc";

function IconDiscrive() {
  const [selectedCard, setSelectedCard] = useState(10);
  return (
    <section>
      <NewIncident to='/incidents/step3' to2='/incidents/step1' />
      <div>
        <div className="max-w-[753px]  mx-auto mt-[40px] mb-[200px] ">
          <Title className="text-[24px] pl-[6%] md:pl-0 ">
            Which of these best describes the incident?
          </Title>

          {/* Cards Maping */}
          <div className="flex flex-wrap  mx-auto max-w-[753px] justify-center md:justify-normal gap-[11px] mt-[25px]">
            {NewIncidentCards.map((items, index) => {
              const isSelected = selectedCard === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedCard(index)}
                  className={`flex justify-center items-center gap-[7px] w-[180px] h-[69px] 
              ${isSelected ? "bg-[#F26922]" : "bg-[#F4F4F5]"} 
              rounded-[6px] border border-[#E4E4E7] py-[22px] px-[20px] cursor-pointer transition duration-300`}
                >
                  <img
                    src={items.path}
                    alt={items.path}
                    className={`${
                      isSelected ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <Disc
                    className={`text-sm ${
                      isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    {items.name}
                  </Disc>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconDiscrive;
