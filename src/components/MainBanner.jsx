import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        className="w-full hidden sm:block"
        alt="banner"
      />
      <img
        src={assets.main_banner_bg_sm}
        className="w-full sm:hidden"
        alt="banner"
      />
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-end sm:justify-center sm:pb-0 sm:pl-18 lg:pl-24 pb-24 px-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:text-left max-w-72 md:max-w-80  lg:max-w-105 leading-tight lg:leading-15">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
            to={"/products"}
          >
            Shop now
            <img
              className="md:hidden transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>
          <Link
            to={"explore-deals"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
