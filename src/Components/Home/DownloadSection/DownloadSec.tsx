import React from "react";
import QuizacBg from "../QuizacBg";
import { downloadcontent } from "../../../Files/Home";

function DownloadSec() {
  const {
    frame,
    orangebox,
    bluebox,
    ios,
    google,
    pattern,
    laptop,
    exploreText,
    downloadText,
  } = downloadcontent;
  return (
    <>
      <QuizacBg>
        <div className="downloadsec-container relative pt-44 pb-32">
          <div className="center-div">
            <div className="download-text absolute top-96 left-40">
              <div className="text-white text-4xl font-semibold w-4/5">
                <h1>Download</h1>
                <h1>Quizac Mobile App</h1>
              </div>
              <div className="flex mt-5">
                <img src={google} alt={downloadText} />
                <img
                  src={ios}
                  alt={downloadText}
                  style={{ height: "56px", marginTop: "13px" }}
                />
              </div>
            </div>
          </div>
          <div className="download-section1">
            <div className="orangebox1 absolute right-32 top-28">
              <img src={orangebox} alt={downloadText} />
            </div>
            <div className="bluebox1 absolute right-0 top-64">
              <img src={bluebox} alt={downloadText} />
            </div>
            <div className="frame1 absolute right-20 top-38">
              <img src={frame} alt={downloadText} />
            </div>
          </div>
          <div className="download-section2">
            <div className="orangebox2 absolute bottom-80 left-72">
              <img
                className="orangebox2-class h-96"
                src={orangebox}
                alt={downloadText}
              />
            </div>
            <div className="laptop1 absolute bottom-48 left-8 ">
              <img className="laptop1-img" src={laptop} alt={downloadText} />
            </div>
            <div className="download-text2 absolute bottom-72 right-40 w-1/3">
              <h1 className="text-white text-5xl font-semibold">
                Explore with our
              </h1>
              <h1 className="text-orange-600 text-5xl mt-3 font-semibold">
                Web Application
              </h1>
              <p className="text-slate-600 text-sm mt-3 leading-loose">
                {exploreText}
              </p>
            </div>
            <div className="pattern1 absolute bottom-40 right-0 ">
              <img src={pattern} alt={downloadText} />
            </div>
          </div>
        </div>
      </QuizacBg>
    </>
  );
}

export default DownloadSec;
