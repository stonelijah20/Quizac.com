import React, { useEffect } from "react";
import {
  sliderHeading,
  sliders,
  learnerList,
  organisationsList,
  teachersList,
} from "../../../Files/Home";
import Sliders from "./Sliders";

function Slider() {
  useEffect(() => {
    let progress = document.getElementsByClassName(
      "progress"
    ) as HTMLCollectionOf<HTMLElement>;
    let slide1 = document.querySelector(".slide1");
    let slide2 = document.querySelector(".slide2");
    let slide3 = document.querySelector(".slide3");
    let indicators = document.querySelectorAll(".indicator");
    let a = 0;
    let b = 100;
    let showInfo;
    for (let i = 0; i < progress.length; i++) {
      progress[i].style.width = `${showInfo}%`;
    }
    indicators[0].addEventListener("click", () => {
      clearInterval(rep);
      slide1?.classList.remove("hidden");
      slide2?.classList.add("hidden");
      slide3?.classList.add("hidden");
      indicators[0].classList.add("bg-orange-600");
      indicators[1].classList.remove("bg-orange-600");
      indicators[2].classList.remove("bg-orange-600");
    });
    indicators[1].addEventListener("click", () => {
      clearInterval(rep);
      slide1?.classList.add("hidden");
      slide2?.classList.remove("hidden");
      slide3?.classList.add("hidden");
      indicators[0].classList.remove("bg-orange-600");
      indicators[1].classList.add("bg-orange-600");
      indicators[2].classList.remove("bg-orange-600");
    });
    indicators[2].addEventListener("click", () => {
      clearInterval(rep);
      slide1?.classList.add("hidden");
      slide2?.classList.add("hidden");
      slide3?.classList.remove("hidden");
      indicators[0].classList.remove("bg-orange-600");
      indicators[1].classList.remove("bg-orange-600");
      indicators[2].classList.add("bg-orange-600");
    });

    let rep = setInterval(() => {
      if (a !== 100) {
        let numStr = a.toLocaleString("en-US");
        for (let i = 0; i < progress.length; i++) {
          progress[i].style.width = `${numStr}%`;
        }
        indicators[0].addEventListener("click", () => {
          for (let i = 0; i < progress.length; i++) {
            progress[i].style.width = `30%`;
          }
        });
        indicators[1].addEventListener("click", () => {
          for (let i = 0; i < progress.length; i++) {
            progress[i].style.width = `60%`;
          }
        });
        indicators[2].addEventListener("click", () => {
          for (let i = 0; i < progress.length; i++) {
            progress[i].style.width = `100%`;
          }
        });
        let intNumStr = parseInt(numStr);
        if (intNumStr < 40) {
          slide1?.classList.remove("hidden");
          slide2?.classList.add("hidden");
          slide3?.classList.add("hidden");
          indicators[0].classList.add("bg-orange-600");
          indicators[1].classList.remove("bg-orange-600");
          indicators[2].classList.remove("bg-orange-600");
        } else if (intNumStr > 40 && intNumStr < 80) {
          slide1?.classList.add("hidden");
          slide2?.classList.remove("hidden");
          slide3?.classList.add("hidden");
          indicators[0].classList.remove("bg-orange-600");
          indicators[1].classList.add("bg-orange-600");
          indicators[2].classList.remove("bg-orange-600");
        } else if (intNumStr > 80) {
          slide3?.classList.remove("hidden");
          slide2?.classList.add("hidden");
          slide1?.classList.add("hidden");
          indicators[0].classList.remove("bg-orange-600");
          indicators[1].classList.remove("bg-orange-600");
          indicators[2].classList.add("bg-orange-600");
        }
        a++;
      } else if (a === 100 && b !== 0) {
        let numStr = b.toLocaleString("en-US");
        for (let i = 0; i < progress.length; i++) {
          progress[i].style.width = `${numStr}%`;
        }
        if (b < 40) {
          slide1?.classList.remove("hidden");
          slide2?.classList.add("hidden");
          slide3?.classList.add("hidden");
          indicators[0].classList.add("bg-orange-600");
          indicators[1].classList.remove("bg-orange-600");
          indicators[2].classList.remove("bg-orange-600");
        } else if (b > 40 && b < 80) {
          slide1?.classList.add("hidden");
          slide2?.classList.remove("hidden");
          slide3?.classList.add("hidden");
          indicators[0].classList.remove("bg-orange-600");
          indicators[1].classList.add("bg-orange-600");
          indicators[2].classList.remove("bg-orange-600");
        } else if (b > 80) {
          slide3?.classList.remove("hidden");
          slide2?.classList.add("hidden");
          slide1?.classList.add("hidden");
          indicators[0].classList.remove("bg-orange-600");
          indicators[1].classList.remove("bg-orange-600");
          indicators[2].classList.add("bg-orange-600");
        }
        b--;
      } else {
        a = 0;
        b = 100;
      }
    }, 500);

    return () => {
      clearInterval(rep);
    };
  }, []);

  return (
    <>
      <div className="s-section">
        <div>
          <h1>{sliderHeading.text}</h1>
          <div className="line"></div>

          {/* //--------------for the images------ */}
          <div className="image-routes">
            <div className="indicator-container">
              <div className="indicator">
                <img
                  src={sliderHeading.learnersimg}
                  alt={sliderHeading.learnerstxt}
                />
              </div>
              <h2>{sliderHeading.learnerstxt}</h2>
            </div>
            <div className="indicator-container">
              <div className="indicator">
                <img
                  src={sliderHeading.teachersimg}
                  alt={sliderHeading.teacherstxt}
                />
              </div>
              <h2>{sliderHeading.organizationstxt}</h2>
            </div>
            <div className="indicator-container">
              <div className="indicator">
                <img
                  src={sliderHeading.organisations}
                  alt={sliderHeading.organizationstxt}
                />
              </div>
              <h2>{sliderHeading.teacherstxt}</h2>
            </div>
          </div>

          {/* //----------------------------------------------------- */}

          {/*-------- progress bar sections------- */}

          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" id="progress"></div>
            </div>
          </div>

          {/* -------------End-------------------- */}

          <div className="slider-container">
            <div className="slide1">
              <Sliders
                title={sliders.header1}
                info={sliders.info1}
                alt="image"
                img={sliders.img1}
                one={learnerList[1]}
                two={learnerList[2]}
                three={learnerList[3]}
              />
            </div>
            <div className="slide2 hidden">
              <Sliders
                title={sliders.header2}
                info={sliders.info2}
                alt="image"
                img={sliders.img2}
                one={organisationsList[1]}
                two={organisationsList[2]}
                three={organisationsList[3]}
              />
            </div>
            <div className="slide3 hidden">
              <Sliders
                title={sliders.header3}
                info={sliders.infor3}
                alt="image"
                img={sliders.img3}
                one={teachersList[1]}
                two={teachersList[2]}
                three={teachersList[3]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
