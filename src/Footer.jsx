import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="max-w-7xl mx-auto text-[#d10000] py-[100px]">
        <h1 className="w-full text-7xl leading-[40pt] bg-gradient-to-b from-red-900 via-red-600 to-red-600 bg-clip-text text-transparent">
          WHEN TODAY ENDS <br />I WILL DISCOVER WHO I AM.
        </h1>
        
      </div>
      <div className="max-w-7xl mx-auto flex  items-center justify-around gap-3">

            <a href="" className="text-sm text-[#d10000] hover:text-[#b90b0b] hover:underline font-thin ">DESIGNED AND CODED WITH LOVE BY VISHAL</a>
            <a href="" className="text-sm text-[#d10000] hover:text-[#b90b0b] hover:underline font-thin ">THIS IS A FAN MADE WEEKND OFFICIAL PAGE</a>
        </div>
    </div>
  );
};

export default Footer;
