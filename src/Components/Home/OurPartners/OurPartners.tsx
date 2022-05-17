import React, { useEffect } from "react";
import { partnerIcons } from "../../../Files/Home";

function OurPartners() {
  useEffect(() => {
    let firstIcon = document.getElementById("iconContainer");
    firstIcon?.firstElementChild?.classList.remove("h-12", "w-24");
    firstIcon?.firstElementChild?.classList.add("h-12", "w-40");
  }, []);

  return (
    <>
      <div className="bg-zinc-100 p-28">
        <h2 className="text-zinc-700 text-5xl font-semibold text-center">
          Our Partners
        </h2>
        <div className="ourpartners-container flex justify-center xl:space-x-20 p-8">
          {partnerIcons.map((picons, index) => {
            return (
              <div id="iconContainer" key={index}>
                <div className="ourpartners-icons h-12 w-24 flex content-center">
                  <img src={picons.icon} alt="Partner" />
                </div>
                <p className="text-sm text-slate-500">{picons.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OurPartners;
