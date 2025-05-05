/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DashboardInfo } from "../lib/database";
import { Title } from "../common/title";
import { Disc } from "../common/disc";
import { Chat } from "../common/chat";
import { Camera, Image, Link } from "lucide-react";
import { Button } from "../common/button";
import { AnimatePresence, motion } from "framer-motion";
import Navdashboard from "../shared/navdashboard";
function Dashboard({titleText='Dashboard', buttonText=' Cypher AI', disc='Welcome Back', Icon= null, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggoleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navdashboard titleText={titleText} onClick={onClick} buttonText={buttonText} disc={disc} Icon={Icon} />
    <main className="max-w-[1300px] mx-auto h-auto bg-white pb-[150px] ">
      <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-[40px] mb-[77px] ">
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

      {/* Troggoler Button */}
      <button
        onClick={toggoleChat}
        className={
          !isOpen
            ? " active:scale-95 transition-all md:size-20 size-16 rounded-full bg-[#F26922] flex md:top-[940px] bottom-10 right-5 md:right-16 lg:right-auto justify-center items-center cursor-pointer  lg:ml-[1193px] lg:top-[557px] fixed"
            : "active:scale-95 transition-all md:size-20 size-16 rounded-full bg-[#FAFAFA] flex md:top-[940px] bottom-10 right-5 md:right-16 lg:right-auto justify-center items-center cursor-pointer  ButtonShadow lg:ml-[1193px] lg:top-[557px] fixed"
        }
      >
        <span
          className={
            !isOpen
              ? " text-[30px] md:text-[55px] text-white"
              : " text-[30px] md:text-[55px] text-black"
          }
        >
          {isOpen ? "✖" : "C"}
        </span>
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-[331px] fixed h-[475px] rounded-[12px] md:ml-[350px] bottom-32  ml-12 md:top-[440px] lg:ml-[835px] lg:top-[125px] bg-[#F4F4F5]    overflow-y-auto overscroll-none scroll-auto "
          >
            <div className="h-[63px] w-full bg-[#F26922] rounded-t-[12px]  ">
              <h2 className="text-base font-bold text-[#FAFAFA] pl-[15px] py-[25px]  ">
                Chat with Cypher
              </h2>
            </div>
            <div className="mt-7 w-[300px] mx-auto h-[370px]">
              <Chat>Lorem ipsum dolar sit general sac mascho werho</Chat>
              <Chat className="self-start bg-transparent border border-[#E4E4E7] rounded-[7px] text-[#71717A] ">
                Lorem ipsum dolar sit general sac mascho werho
              </Chat>
              <Chat className="self-start bg-transparent border border-[#E4E4E7] rounded-[7px] text-[#71717A] ">
                Lorem ipsum dolar sit general sac mascho werho
              </Chat>
              <Chat>Lorem ipsum dolar sit general sac mascho werho</Chat>
              <form>
                <input
                  className="w-full text-[12px] text-[#71717A] py-4 pl-[10px] border border-[#E5E7EB] rounded-[6px]  h-[42px]  outline-4 outline-sky-500 "
                  type="text"
                  placeholder="Enter your question..."
                />
                <div className="flex justify-between items-center h-[30px] pb-[15px] mt-4 ">
                  <div className="flex text-[#71717A] gap-[7px] ">
                    <Camera className="size-[24px] cursor-pointer" />
                    <Image className="size-[24px] cursor-pointer" />
                    <Link className="size-[24px] cursor-pointer" />
                  </div>
                  <div>
                    <Button className="h-[30px] w-[80px] font-normal py-[6px] hover:shadow shadow-lg shadow-orange-100 px-[25px] rounded-full ">
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}

export default Dashboard;
