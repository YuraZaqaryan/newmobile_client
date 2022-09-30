import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Store from "../../components/store/Store";
import "./mainpage.css";
import HorizonSwipe from "../../components/horizonScroll/HorizonSwipe";
import { observer } from "mobx-react-lite";

const Mainpage = observer(() => {
  return (
    <>
      <div className="SlideImage"> 
        <Carousel />
      </div>
      <div className="container mainpage" id="mainPage">
        <HorizonSwipe />
        <Store />
      </div>
    </>
  );
});
export default Mainpage;
