import React from "react";
import { quote } from "../../../Files/Home";
import { reviews } from "../../../Files/Home";

function ReviewCards() {
  return (
    <>
      <div className="reviewcard-container flex justify-center xl:space-x-10  space-x-0">
        {reviews.map((content, index) => {
          return (
            <div className="flex" key={index}>
              <div
                className="cards-container bg-white w-60 shadow-md relative"
                style={{
                  minHeight: "100px",
                }}
              >
                <div className="p-4">
                  <div className="pb-32">
                    <img src={quote.quote} alt="quote" />
                    <p className="text-xs text-slate-600 leading-loose">
                      {content.review}
                    </p>
                  </div>
                  <div className="flex absolute bottom-3">
                    <img
                      src={content.cusicon}
                      alt={content.cusName}
                      className="h-10 w-10"
                    />
                    <div className="ml-3">
                      <h5 className="font-bold text-slate-800">
                        {content.cusName}
                      </h5>
                      <p className="text-xs text-slate-600">{content.cusCat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ReviewCards;
