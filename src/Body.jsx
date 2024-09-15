import React, { useEffect, useState } from "react";
import Weekend from "./Weekend";
import Card from "./Card";
import Carousel from "./Carousel";
import { imgarr } from "./assets/imgs/asset";
import { ReactLenis, useLenis } from "lenis/react";
import ReactPlayer from "react-player";
import { IoVolumeMute } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Body = () => {

  const [isplaying, setIsPlaying] = useState(true);
  const [ismuted, setIsmuted] = useState(true);
  return (
    <>

        <div className="flex flex-col">
          <div className=" w-full py-5">
            <Weekend />
          </div>
          <div className="w-full px-3 lg:px-16  flex flex-col justify-center items-center h-[500px] sm:h-[700px] ">
            <div className="flex flex-col justify-center items-center mb-[100px]">
              <div className="w-full flex flex-col justify-center items-center ">
                <div className="flex   justify-center items-center">
                  <p className="px-3 text-red-700 text-center  rounded-r-full rounded-l-full border border-red-700 select-none">
                    new
                  </p>
                  <button
                    className="text-4xl ml-4 w-[40px] h-[40px] rounded-full bg-gradient-to-br relative  duration-100 ease-in-out from-slate-900 via-red-900 to-slate-900 text-red-600 rounded-r-full rounded-l-full border border-[rgb(120,33,33)] overflow-hidden flex flex-col justify-center items-center "
                    onClick={() => {
                      setIsmuted(!ismuted);
                    }}
                  >
                    <AnimatePresence>
                      {ismuted ? (
                        <motion.div
                          className="absolute bg-gradient-to-br from-slate-800 via-red-600 to-slate-900 bg-clip-text  text-2xl text-gray-950  "
                          key="muted" // Add key to ensure unique components
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1, ease: "circInOut" }}
                        >
                          <IoVolumeMute />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="unmuted"
                          className="bg-gradient-to-br from-slate-800 via-red-600 to-slate-900 bg-clip-text text-3xl text-gray-950 " // Add key to ensure unique components
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1, ease: "circInOut" }}
                        >
                          <IoMdVolumeMute />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                <h1 className="bg-gradient-to-br from-red-600 via-red-600 to-slate-900 bg-clip-text text-transparent text-4xl sm:text-7xl">
                  Dancing in the Flames
                </h1>
              </div>
              <button className="text-4xl ml-4 px-10 py-1 bg-gradient-to-br group hover:scale-105 duration-100 ease-in-out from-slate-900 via-red-900 to-slate-900 text-red-600 rounded-r-full rounded-l-full border border-[rgb(120,33,33)] relative overflow-hidden">
                <div className="absolute -top-[100%] opacity-50 left-[-40%] group-hover:left-[120%]  duration-300 ease-in-out rotate-45  h-[150px] w-[50px] bg-gradient-to-br from-slate-50 via-red-600 to-red-600"></div>
                <a
                  href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                  className="bg-gradient-to-br from-slate-800 via-red-600 to-slate-900 bg-clip-text text-transparent"
                >
                  Listen Now
                </a>
              </button>
            </div>
            <ReactPlayer
              loop={true}
              width={"100%"}
              height={"100%"}
              controls={false}
              playing={isplaying}
              url={"https://www.youtube.com/watch?v=MLlSSJ0z7xM"}
              muted={ismuted}
            />
          </div>
          <div className="w-full overflow-hidden flex flex-col justify-center items-center text-red-800 py-[100px] ">
            <h1 className="text-7xl">Albums</h1>

            <button className="text-4xl ml-4 px-10 py-1 bg-gradient-to-br group hover:scale-105 duration-100 ease-in-out from-slate-900 via-red-900 to-slate-900 text-red-600 rounded-r-full rounded-l-full border border-[rgb(120,33,33)] relative overflow-hidden">
              <div className="absolute -top-[100%] opacity-50 left-[-40%] group-hover:left-[120%]  duration-300 ease-in-out rotate-45  h-[150px] w-[50px] bg-gradient-to-br from-slate-50 via-red-600 to-red-600"></div>
              <a
                href="https://www.theweeknd.com/"
                className="bg-gradient-to-br from-slate-800 via-red-600 to-slate-900 bg-clip-text text-transparent"
              >
                Checkout
              </a>
            </button>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <Carousel data={imgarr} />
          </div>
        </div>

    </>
  );
};

export default Body;
