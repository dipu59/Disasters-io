import React, { useState } from 'react';
import { Title } from '../common/title';
import { Disc } from '../common/disc';
import { documentsCard } from '../lib/database';



const DocumentsCard = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? documentsCard : documentsCard.slice(0, 2);

  return (
    <div className="px-3 lg:px-0   mb-[40px]">
      <div className="flex justify-between items-center mb-4">
        <Title className="text-base ">Documents</Title>
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
      <div className="grid  gap-[17px]">
        {visibleCards.map((location) => (
          <div key={location.id} className="max-w-[679px] py-[15px] px-[10px] flex gap-3 items-center bg-[#F4F4F5] mx-auto w-full rounded-lg overflow-hidden ">
            <div className="">
              <img src={location.image} alt={location.title} className="size-[78px] rounded-[10px] object-cover" />
             
            </div>
            <div className="h-[64px]">
              <Title className="text-sm ">{location.title}</Title>
              <Disc className="text-[12px] my-[4px]">{location.address}</Disc>
              <Title className="text-sm">{location.price}</Title>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsCard;
