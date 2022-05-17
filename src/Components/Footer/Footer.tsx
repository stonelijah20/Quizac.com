import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Footer.css";
import { quizac, sayHello } from "../../Files/Footer";
import { About, Info } from "../../Files/Footer";

function Footer() {
  const { logo } = quizac;
  return (
    <>
      <div className="footer-color">
        <div className="content flex place-content-center pt-20 pb-20">
          <div>
            <div className="quizac px-5">
              <div className="image-size">
                <img src={logo} alt="quizac" />
              </div>
              <div className="socials flex mt-6">
                <li className="footer-icons">
                  <FaFacebook size="2rem" />
                </li>
                <li className="footer-icons">
                  <FaTwitter size="2rem" />
                </li>
                <li className="footer-icons">
                  <FaInstagram size="2rem" />
                </li>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="about px-6">
              <ul>
                {About.map((con, index) => {
                  const { flink, dire } = con;
                  return (
                    <div key={index}>
                      <li className="py-1 text-white hover:text-orange-600">
                        <Link to={dire}>{flink}</Link>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="info px-6">
              <ul>
                {Info.map((info, index) => {
                  const { flink, dire } = info;
                  return (
                    <div key={index}>
                      <li className="py-1 text-white hover:text-orange-600">
                        <Link to={dire}>{flink}</Link>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="lines px-6">
              {sayHello.map((contact, index) => {
                const { line1, line2, mail } = contact;
                return (
                  <div key={index}>
                    <li className="footer-contact">{line1}</li>
                    <li className="footer-contact">{line2}</li>
                    <li className="footer-contact">{mail}</li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <p>
          &copy; 2021 <span className="text-orange-600">Quizac inc.</span> All
          Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
