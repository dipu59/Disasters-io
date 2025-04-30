import React, { useState } from "react";
import logo from "/logo.png";
import { navItems } from "../lib/database";
import { Disc } from "../common/disc";
import logo1 from "/notify.png";
import logo2 from "/logo1.png";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E4E4E7]">
      <div className="max-w-[1269px] mx-auto pt-[23px] pb-[15px] px-6 lg:px-0">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>

          {/* Nav Items for large screens */}
          <ul className="lg:flex hidden justify-center items-center gap-[35px]">
            {navItems.map((item, index) => (
              <Disc className="text-[14px]" key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative font-bold text-[#09090B] border-b-[3px] pb-[26px] border-b-[#09090B]"
                      : "text-[#71717A]"
                  }
                >
                  {item.link}
                </NavLink>
              </Disc>
            ))}
          </ul>

          {/* User info for large screen */}
          <div className="flex justify-center items-center gap-5">
            {/* Hamburger button for small screens */}
            <div className="lg:hidden block">
              <button
                className="transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="md:flex hidden justify-center items-center gap-[9px]">
              <img src={logo1} alt="Notification" />
              <img src={logo2} alt="User's Photo" />
              <div>
                <h3 className="text-[#A1A1AA] text-base font-semibold">
                  Usman Zafar
                </h3>
                <h5 className="text-[#A1A1AA] text-sm">usmanzafar@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 mt-9 lg:hidden overflow-hidden"
            >
              <div className="flex md:hidden justify-center sm:justify-end items-center pb-3 gap-[9px]">
                <img src={logo1} alt="Notification" />
                <img src={logo2} alt="User's Photo" />
                <div>
                  <h3 className="text-[#A1A1AA] text-base font-semibold">
                    Usman Zafar
                  </h3>
                  <h5 className="text-[#A1A1AA] text-sm">
                    usmanzafar@gmail.com
                  </h5>
                </div>
              </div>
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)} // auto close on click
                    className={({ isActive }) =>
                      isActive
                        ? "block font-bold text-[#09090B] border-b-[3px] pb-[6px] border-b-[#09090B]"
                        : "block text-[#71717A]"
                    }
                  >
                    {item.link}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border line */}
      <div className="max-w-[1440px] h-[1px] rounded-lg bg-[#3F3F46] -mt-[1px]"></div>
    </nav>
  );
}
