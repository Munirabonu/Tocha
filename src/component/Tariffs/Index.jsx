import React from "react";
import {data} from "../../utils/CarouselOfTariffsData"

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./Style.scss";
import Carousel from "../CarouselOfTariffs/Carousel";
const items = data.map(({ id, action, text, paragraph, btnText }) => {
  return (
    <Carousel
      id={id}
      action={action}
      text={text}
      paragraph={paragraph}
      btnText={btnText}
    />
  );
});

function Index() {
  return (
    <div className="tariffs container">
      <h2 className="fs-4664">Тарифы</h2>
      <p className="fs-2432">Стоимость зависит от трафика сайта</p>
      <div className="content__tariffs">
        <AliceCarousel
          autoPlay
          autoPlayInterval={1500}
          mouseTracking
          infinite
          disableButtonsControls
          items={items}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1024: {
              items: 3,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Index;
