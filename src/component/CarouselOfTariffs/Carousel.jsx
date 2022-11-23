import React from "react";

function Carousel({ id, action, text, paragraph, btnText }) {
  return (
    <div className="box">
      <h6>{action}</h6>
      <div className="info-group">
        <h5>{text}</h5>
        <p>{paragraph}</p>
        <button>{btnText}</button>
      </div>
    </div>
  );
}
export default Carousel;
