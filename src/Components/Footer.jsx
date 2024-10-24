import React from 'react'

function Footer() {
  return (
    <>
    <footer>
       <div className="footer-head">
        <img src="https://www.cherryinvestments.eu/cherry/img/cherry-white.svg" alt="" />
        <h2>INQUIRE TODAY <i className="ri-arrow-right-down-line"></i></h2>
       </div>
       <div className="fotter-btm">
        <div className=" btm btm1 btm11">
            <p>Communication</p>
            <p>Tel : +302310 222 905</p>
            <p>Email : info@cherryinvestments.eu</p>
        </div>
        <div className=" btm btm2">
            <p>Address</p>
            <p>Gurugram</p>
            <p>Sector-47 I-Techpark</p>
        </div>
        <div className=" btm btm2">
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
        </div>
        <div className=" btm btm2">
            <p>COPYRIGHT ©2024 CHERRY</p>
            <p>INVESTMENTS</p>
            <p>with <i className="ri-heart-fill"></i> by Darkpony</p>
        </div>
       </div>
       <div className="footer-icon">
       <i className="ri-facebook-circle-fill"></i>
       <i className="ri-instagram-line"></i>
       </div>
    </footer>
    </>
  )
}

export default Footer