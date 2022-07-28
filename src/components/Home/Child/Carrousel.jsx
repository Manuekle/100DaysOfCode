import React from "react";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Carrousel() {
  const settings = {
    pagingDotsStyle: {
      fill: "gray",
      margin: "3px",
    },
  };

  const renderCenterLeftControls = ({ previousSlide }) => (
    <div className="hidden">
      <button onClick={previousSlide}>
        <FontAwesomeIcon icon={faArrowCircleLeft} color="gray" size="lg" />
      </button>
    </div>
  );
  const renderCenterRightControls = ({ nextSlide }) => (
    <div className="hidden">
      <button onClick={nextSlide}>
        <FontAwesomeIcon icon={faArrowCircleRight} color="gray" size="lg" />
      </button>
    </div>
  );

  return (
    <div className="lg:px-80">
      <Carousel
        easing="easeInOutElastic"
        adaptiveHeight={true}
        cellAlign="center"
        wrapAround={true}
        autoplay={true}
        slidesToShow={1}
        // cellSpacing={30}
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        defaultControlsConfig={settings}
      >
        <div class="flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wtTh-txJp2YKwT9lpDt9TuKhfonbDlGqGA&usqp=CAU"
            alt=""
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0Hng1-mNR-ZorX12pSROmMkhrXd1quNqiQ&usqp=CAU"
            alt=""
          />
        </div>
      </Carousel>    
    </div>
  );
}
export default Carrousel;
