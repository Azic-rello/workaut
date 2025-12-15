import React from "react";
import { writeC } from "../constants";

const WriteCard = () => {
  return (
    <div className="flex w-[90%] mx-auto mt-24">
      {writeC.map((item) => (
        <div className="w-[25%] flex flex-col items-center border-r-4 border-[#dd0000] h-28 gap-y-4">
          <h1 className="text-xl font-bold text-white mt-6">
            <span className="text-3xl text-[#e40000]">{item.foiz}</span>{" "}
            {item.name}
          </h1>
          <p className="text-zinc-500">{item.info}</p>
        </div>
      ))}
    </div>
  );
};

export default WriteCard;
