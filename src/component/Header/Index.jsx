import React from "react";
import "./style.scss";
import header from "../../assets/images/header.png";

export default function Header() {
  return (
    <div className="header container">
      <div className="text_wrap">
        <h1 className="title fs-5060">
          <span className="blue">Telegram чат </span>
          на вашем сайте
        </h1>
        <p className="text fs-2434">
          Общение с клиентами станет простым и удобным, а подключение займет 5
          минут. Первый месяц — <span className="blue">бесплатно!</span>{" "}
        </p>
        <button className="btn">Подключить</button>
      </div>
      <div className="img_wrap">
        <img src={header} alt="header" />
      </div>
    </div>
  );
}
