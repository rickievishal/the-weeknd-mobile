import React, { useEffect, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Carousel = ({ data }) => {

  const [next, setnext] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setnext((prevNext) => (prevNext === data.length - 1 ? 0 : prevNext + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <div className="w-full text-red-900 flex flex-col items-start">
      <div className="w-auto h-[500px] sm:max-h-[500px] flex  py-4">
        <motion.div
          className="flex w-[300px] sm:w-[400px] lg:w-[450px] "
          drag="x"
          initial={{ scale: 0.9 }}
          dragConstraints={{ right: 0, left: 0 }}
          animate={{ translateX: `-${90 * next}%` }}
          transition={{ ease: "circInOut", duration: 1 }}
        >
          {data.map((data, index) => (
            <motion.div key={index}
              className="w-full h-full shrink-0 rounded-3xl "
              initial={{
                scale: 1,
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
              }}
              exit={{ scale: 1 }}
              animate={{zIndex:next == index ? 100 : 0,
                scale: next == index ? 1.2 : 1,
                boxShadow: ` ${
                  next == index
                    ? "0px 10px 10px rgba(227, 0, 45, 0.1)"
                    : "0px 0px 0px 0px rgba(0, 0, 0, 0.1)"
                }`,
              }}
              transition={{ ease: "circInOut", duration: 1 }}
            >
              <Card data={data}  />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-5">
        <button
          className="w-[50px] h-[50px] shadow-inner  shadow-red-700 hover:bg-slate-800 active:bg-gray-900 active:scale-[97%] duration-100 ease-in-out active:shadow-gray-950 active:shadow-lg  select-none rounded-full bg-gray-900"
          onClick={() => {
            if (next * 260 > 0) {
              setnext(next - 1);
            }
          }}
        >
          prev
        </button>
        <button
          className="w-[50px] h-[50px] shadow-inner  shadow-red-700 hover:bg-slate-800 active:bg-gray-900  active:scale-[97%] duration-100 ease-in-out active:shadow-gray-950 active:shadow-lg  select-none rounded-full bg-gray-900"
          onClick={() => {
            if (next * 260 < 260 * (data.length - 1)) {
              setnext(next + 1);
            }
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
