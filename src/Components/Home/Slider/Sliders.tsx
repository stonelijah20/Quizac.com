import React from "react";
import { sliders } from "../../../Files/Home";

function Sliders(props: any) {
  return (
    <>
      <div className="sliders">
        <div className="sliders-text-section">
          <h1>{props.title}</h1>
          <p>{props.info}</p>
          <ul className="list-container">
            <div className="link">
              <img src={sliders.limg} alt="list-icon" />
              <li>{props.one}</li>
            </div>
            <div className="link">
              <img src={sliders.limg} alt="list-icon" />
              <li>{props.two}</li>
            </div>
            <div className="link">
              <img src={sliders.limg} alt="list-icon" />
              <li>{props.three}</li>
            </div>
          </ul>
        </div>
        <div className="sliders-image-sections">
          <img className="slide-image" src={props.img} alt={props.alt} />
        </div>
      </div>
    </>
  );
}

export default Sliders;
