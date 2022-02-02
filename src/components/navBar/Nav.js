import "./Nav.scss";
import React, { useState } from "react";
import { headSvgs } from "../graphics/headSvgs.js";
function Nav() {
  const burger = [
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30px"
      height="30px"
    >
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </svg>,
    <svg
      className="open"
      fill="#aff00"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
    >
      <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
    </svg>,
  ];

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-right">
        <div className="container">
          <a className="navbar-brand" href="#Home">
            {headSvgs[3]}
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            {!isNavCollapsed ? burger[0] : burger[1]}
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : "collapsed"
            } navbar-collapse`}
            id="navbarsExample09"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SeaechRegion">
                  Our Results
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Symptoms">
                  Exterior
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#protect">
                  Interior
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
