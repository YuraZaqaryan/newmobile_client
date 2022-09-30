import React from "react";
import Aboutus from "../../components/aboutus/Aboutus";
import Stores from "../../components/stores/Stores";
import AOS from "aos";
import "aos/dist/aos.css";
import "./aboutpage.css";
const About = () => {
  AOS.init();
  return (
    <div className="aboutpage__back">
      <div className="container aboutpage">
        <Stores />
        <Aboutus />
      </div>
    </div>
  );
};
export default About
