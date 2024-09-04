import React from "react";
import { FaRegStar, FaRegUser, FaSearch } from "react-icons/fa";
import { FaBagShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { headerlogo } from "../../utils";

function TopHeader() {
  return (
    <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0 gap-[20px]">
      {/* ----logo */}
      <div className="logo cursor-pointer">
        <img src={headerlogo} alt="Supergear Logo" className="w-44" />
      </div>

      {/* ----Search bar */}

      <div className="flex-grow mx-4 sm:!block hidden">
        <div className="flex items-center justify-between w-full p-2 pl-4 rounded-full border border-gray-300 focus-within:border-gray-500">
          <input
            type="text"
            placeholder="Search products"
            className="w-full focus:outline-none"
          />
          <button className="text-black">
            <FaMagnifyingGlass className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ----icons */}
      <div className="flex items-center gap-x-6 text-2xl">
        <span className="cursor-pointer hover:text-newsky">
          <FaRegUser className="size-[23px]" />
        </span>
        <span className="relative cursor-pointer hover:text-newsky transition-colors duration-500 ease-in-out">
          <FaRegStar className="size-[23px]" />
          <span className="inline-flex items-center justify-center bg-newred text-white absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
            0
          </span>
        </span>
        <span className="relative cursor-pointer hover:text-newsky transition-colors duration-500 ease-in-out">
          <FaBagShopping className="size-[23px]" />
          <span className="inline-flex items-center justify-center bg-newred text-white absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
            0
          </span>
        </span>
      </div>
    </div>
  );
}

export default TopHeader;
