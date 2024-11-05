import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./CSS/About.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="main" data-scroll-container ref={scrollRef}>
      <Nav />
      <div className="sec1-A">
        <h2>TRANSFORMING,</h2>
        <h2>FINANCIAL LANDSCAPES</h2>
        <h2>ON REAL ESTATE</h2>
        <p>
          CHERRY INVESTMENTS is an investment company specialising in innovative
          projects
        </p>
        <p>which focus on the real estate sector.</p>
        <p>
          With a deep understanding of the sector, we enable our clients to
          achieve their
        </p>
        <p>
          investment goals and secure significant returns from the opportunities
          provided by
        </p>
        <p>the domestic real estate.</p>
      </div>

      <div className="sec2-A">
        <img
          className="sec2img"
          src="https://www.cherryinvestments.eu/portal-img/gallery_images/1/image20b.jpg"
          alt=""
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        />
        <img
          className="sec2img"
          src="https://www.cherryinvestments.eu/portal-img/gallery_images/1/a-2.jpg"
          alt=""
          data-scroll
          data-scroll-speed="1.5"
          data-scroll-direction="vertical"
        />
        <img
          className="sec2img"
          src="https://www.cherryinvestments.eu/portal-img/gallery_images/1/g1.jpg"
          alt=""
          data-scroll
          data-scroll-speed="2.5"
          data-scroll-direction="vertical"
        />
      </div>
      <div className="sec3-A">
        <h2>WHEN VISION</h2>
        <h2>MEETS ACHIEVEMENT</h2>
      </div>
      <div className="sec4-A">
        <p>
          CHERRY INVESTMENTS and its team of experienced executives, combining
          their extensive knowledge in the real estate sector and in identifying
          profitable investment opportunities, seeks and selects buildings or
          land plots to purchase and, through their construction or
          reconstruction, creates modern bioclimatic buildings in urban areas of
          high commerciality, thus ensuring high investment returns.
        </p>

        <p>
          We prioritise transparency, honesty and long-term relationships. We
          believe in fostering trust and open communication with our clients,
          ensuring they are well-informed and confident in their investment
          decisions. Our team is dedicated to providing timely information, with
          the aim of finding the right investment project for you.
        </p>
      </div>
      <div className="sec5-A"></div>
      <div className="sec6-A">
        <div className="hd">
          <h2>OUR VISION</h2>
          <h2>
            “A successful investment is one that, after thorough analysis,
            promises security and adequate returns”
          </h2>
          <h2>Benjamin Graham</h2>
        </div>
        <div className="pr">
          <p>
            With the goal of upholding the highest professional standards at all
            times, Cherry first invests in its employees in order to build
            enduring connections with its clients.
          </p>
          <p>
            It offers premium investment programs and services which are always
            up to date with the rapidly evolving standards of the market. Based
            on the experience and expertise of its employees, it provides wise
            investment advice and keeps a careful eye on all financial industry
            trends.
          </p>
        </div>
      </div>
      <div className="sec7-A">
        <div className="sec7-A-left">
          <p>CHERRY INVESTMENTS</p>
          <h2>OUR TEAM</h2>
          <p>
            We currently employ 25 staff members and are expanding quickly.
            Establishing enduring connections between the company's executives
            is our top priority, founded not just on mutual benefit but also on
            integrity and respect for each person as an individual. Our team
            members specialize in finance, real estate, banking, and law.
          </p>
        </div>
        <div className="sec7-A-right"></div>
      </div>
      <div className="sec8-A"></div>
      <Footer />
    </div>
  );
}

export default About;
