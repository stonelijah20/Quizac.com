import React from "react";
import ReviewCards from "./ReviewCards";

function Reviews() {
  return (
    <>
      <div className="bg-teal-50 p-20">
        <div className="text-center pb-10">
          <h4 className="font-bold text-sm tracking-widest text-orange-500">
            Our Customers, Our pride
          </h4>
          <h1 className="font-bold text-4xl text-slate-800">
            What our customers say.
          </h1>
        </div>
        <ReviewCards />
      </div>
    </>
  );
}

export default Reviews;
