import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [toolbar, settoolbar] = useState(false);

    // const handleClick = () => {
    //   // console.log("Overlay clicked!");
    //   settoolbar(!toolbar);
    // };

  return (
    <>
      <nav className="navbar">
        <div className="nav-right">
          <img
            src="https://www.cherryinvestments.eu/cherry/img/cherry_logo.svg"
            alt="Logo"
          />
        </div>
        <div
          className="nav-left"
        //   onClick={handleClick}
        onClick={() => settoolbar(!toolbar)}
        >
          <div className="nav-left-circle">
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>

      {toolbar && (
        <>
          {" "}
          <div className="overlay">
            <div className="overlay-right">
            <Link to="/about">ABOUT US</Link>
              <h2>PROJECTS</h2>
              <h2>CORPORATE SOCIAL RESPONSIBILITY</h2>
              <h2>INVEST IN US</h2>
              <h2>CONTACT</h2>
            </div>
            <div className="overlay-left">
              <h4>CONTACT</h4>
              <p>Tel. : +302310 222 905</p>
              <p>Email :</p>
              <p>info@cherryinvestments.eu</p>
              <h4>ADDRESS</h4>
              <p>Mohali,</p>
              <p>Cheema boilers</p>
              <h4>FOLLOW US</h4>
              <div className="overlay-left-icon">
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
              </div>
            </div>
          </div>{" "}
        </>
      )}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </>
  );
}

export default Nav;
