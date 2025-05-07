import React, { useState } from "react";
import { Title } from "../common/title";
import { Disc } from "../common/disc";
import { locationData } from "../lib/database";

const Locations = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? locationData : locationData.slice(0, 4);

  return (
    <div className="px-3 lg:px-0 py-0">
      <div className="flex justify-between items-center mb-6">
        <Title className="text-base ">Locations</Title>
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm text-gray-500 hover:underline"
          >
            See all
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="text-sm text-gray-500 hover:underline"
          >
            Close
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[17px]">
        {visibleCards.map((location) => (
          <div
            key={location.id}
            className="max-w-[214px] mx-auto w-full rounded-lg overflow-hidden "
          >
            <div className="relative">
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-[180px] object-cover"
              />
              <Title className="absolute font-bold top-2 right-2 bg-white px-2 py-1 rounded-full text-[10px] flex gap-1 items-center">
                <img src="/building.png" className="size-[11.19px]" alt="" />{" "}
                {location.tag}
              </Title>
            </div>
            <div className="">
              <Title className="text-sm mt-[14px]">{location.title}</Title>
              <Disc className="text-[12px] my-[11px]">{location.address}</Disc>
              <Title className="mt-2 text-sm">{location.price}</Title>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
