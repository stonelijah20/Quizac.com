import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navigations.css";

import NavigationContent from "../../Files/Navigations";
import { image, login, signup } from "../../Files/Navigations";

function Navigations() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  const { logoimg, text } = image;
  return (
    <>
      <div className="relative navi flex justify-between items-center py-3 px-4 nav-color">
        <div className="image-size">
          <img src={logoimg} alt={text} />
        </div>
        <div>
          {(isOpen || screenWidth > 1150) && (
            <ul className="items-container flex items-center justify-center">
              {NavigationContent.map((navcon, index) => {
                const { dir, navelement } = navcon;
                return (
                  <div key={index}>
                    <li>
                      <Link to={dir}>{navelement}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div>
          {(isOpen || screenWidth > 1150) && (
            <ul className="user-acc flex">
              <li>
                <Link to={login.dir}>{login.ele}</Link>
              </li>
              <li className="text-slate-100 hover:text-slate-100">
                <Link to={signup.dir}>
                  <span className="bg-orange-600 rounded-3xl pr-6 pl-6 py-2 text-xs uppercase hover:bg-orange-900 duration-1000">
                    {signup.ele}
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="menu-btn absolute top-5 right-5" onClick={toggleBtn}>
          <span>
            <GiHamburgerMenu className="text-slate-600 w-5 h-5" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navigations;
