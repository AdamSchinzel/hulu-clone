import React from "react";
import { useRouter } from "next/router";
import requests from "../../../utils/requests";

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <nav className="flex px-10 sm:px-12 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            className="last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white"
            onClick={() => router.push(`/?genre=${key}`)}>
            {title}
          </h2>
        ))}
      </nav>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </div>
  );
};

export default NavBar;
