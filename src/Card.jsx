import React from "react";
import weekend from "./assets/imgs/weekend.jpg";
const Card = ({data}) => {

  return (
    <div className="w-full h-full flex flex-col justify-start items-start border rounded-3xl bg-gray-950 border-slate-900 p-2 shrink-0">
      <div className="w-full h-full rounded-2xl border border-slate-900 shadow-lg overflow-hidden flex justify-center items-center">
        <img className="w-full object-cover" src={data.imgsrc} alt="" />
      </div>
      <div className="card-body mt-2 px-2">
        <h1 className="leading-tight text-2xl">{data.description}</h1>
        <div className="description flex gap-2">

          <h2 className="leading-tight text-xs">{data.year}</h2>
          <h2 className="leading-tight text-xs">by {data.artist}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
