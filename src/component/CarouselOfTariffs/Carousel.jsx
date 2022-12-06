import React from "react";
import "./Style.scss";
function Carousel({  action, text, paragraph, btnText }) {
  return (
    <div className="carousel-box">
      <h6 className="fs-2448">{action}</h6>
      <div className="info-group">
        <h5 className="fs-2840">{text}</h5>
        <p className="fs-2030">{paragraph}</p>
        <button className="btn">{btnText}</button>
      </div>
    </div>
  );
}
export default Carousel;
