import React from "react";
import { mediaIcons } from "../../../Files/Home";

function MediaSec() {
  return (
    <>
      <div className="bg-zinc-100 p-32 flex flex-col">
        <div className="flex justify-center text-4xl font-bold text-zinc-700">
          <h1>Media</h1>
        </div>
        <div className="mediasec-icons-container flex flex-wrap justify-center">
          {mediaIcons.map((icons, index) => {
            return (
              <div className="pt-16 flex flex-col mx-16" key={index}>
                <img
                  className="h-14 w-14 self-center"
                  src={icons.icon}
                  alt={icons.name}
                />
                <p className="text-sm w-full">{icons.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MediaSec;
