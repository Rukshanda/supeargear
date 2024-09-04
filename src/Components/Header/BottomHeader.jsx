import { useState } from "react";
import {
  camera,
  computer,
  game,
  headphones,
  mobile,
  powertools,
  robotclean,
  smartwatch,
  sportwatch,
  tablet,
  tvaudio,
  tvbox,
} from "../../utils";
import { FaBarsStaggered } from "react-icons/fa6";

function BottomHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSec, setIsOpenSec] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleResDropdown = () => {
    setIsOpenSec((prevState) => !prevState);
  };
  return (
    <div className="w-full bg-[black] text-[white] ">
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-5 px-4 py-2 lg:px-0">

        {/* ------ The DropDown for categories */}
        <div className="relative inline-block text-left md:w-[20%] w-[50%]">
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white"
            type="button"
          >
            Select Category
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute lg:right-0 z-10 bg-[black] divide-y divide-gray-100 rounded-lg shadow w-52  ">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={tvaudio} className="size-6 rounded-md" />
                    </span>
                    <span>Tv & Audio</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={tvbox} className="size-6 rounded-md" />
                    </span>
                    <span>Tv Box</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={powertools} className="size-6 rounded-md" />
                    </span>
                    <span>Power Tools</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={headphones} className="size-6 rounded-md" />
                    </span>
                    <span>Headphones</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={mobile} className="size-6 rounded-md" />
                    </span>
                    <span>Cell Phones</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={smartwatch} className="size-6 rounded-md" />
                    </span>
                    <span>Smart Watches</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={game} className="size-6 rounded-md" />
                    </span>
                    <span>Game & Video</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={robotclean} className="size-6 rounded-md" />
                    </span>
                    <span>Robot Clean</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={sportwatch} className="size-6 rounded-md" />
                    </span>
                    <span>Sport Watches</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={tablet} className="size-6 rounded-md" />
                    </span>
                    <span>Tablets</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={computer} className="size-6 rounded-md" />
                    </span>
                    <span>Computers & Laptop</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-stone-600"
                  >
                    <span>
                      <img src={camera} className="size-6 rounded-md" />
                    </span>
                    <span>Cameras & Photos</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* ------ The Navbar */}
        <div className="w-[75%] md:!block hidden">
          <ul className="flex lg:gap-[70px] gap-[40px]">
            <li className="uppercase cursor-pointer">Home</li>
            <li className="uppercase cursor-pointer">Shop</li>
            <li className="uppercase cursor-pointer">Cart</li>
            <li className="uppercase cursor-pointer">Oders</li>
            <li className="uppercase cursor-pointer">My Account</li>
            <li className="uppercase cursor-pointer">Blog</li>
          </ul>
        </div>
        {/* ------ The Responsive Navbar */}
        <div className="relative inline-block text-right w-[20%] md:hidden">
          <button
            onClick={toggleResDropdown}
            className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white"
            type="button"
          >
            <FaBarsStaggered />
          </button>

          {isOpenSec && (
            <div className="absolute right-0 z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-52">
              <ul className="flex flex-col py-2 text-sm text-gray-700 dark:text-gray-200 text-left">
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">Home</li>
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">Shop</li>
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">Cart</li>
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">Orders</li>
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">My Account</li>
                <li className="uppercase cursor-pointer rounded-lg py-2 px-3 hover:bg-stone-600">Blog</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
