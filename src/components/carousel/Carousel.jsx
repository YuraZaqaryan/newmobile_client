import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slide1 from './../../images/slide/slide1.jpg'
import Slide2 from './../../images/slide/slide2.png'
import Slide3 from './../../images/slide/slide3.jpg'

import Slide1Small from './../../images/slide/slide1_small.jpg'
import Slide2Small from './../../images/slide/slide2_small.jpg'
import Slide3Small from './../../images/slide/slide3_small.jpg'
import './carousel.css'

const CarouselImages = () => (
  <Carousel autoPlay emulateTouch interval='3500' infiniteLoop>
    <div>
      <img
        alt="Slide1"
        src={Slide1}
      />
      <img
        alt="Slide1Small"
        src={Slide1Small}
      />
    </div>
    <div>
      <img
        alt="Slide2"
        src={Slide2}
      />
      <img
        alt="Slide2Small"
        src={Slide2Small}
      />
    </div>
    <div>
      <img
        alt="Slide3"
        src={Slide3}
      />
      <img
        alt="Slide3Small"
        src={Slide3Small}
      />
    </div>
  </Carousel>
);
export default CarouselImages