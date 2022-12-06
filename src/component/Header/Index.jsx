import React, { useEffect } from "react";
import "./style.scss";
import header from "../../assets/images/header.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="header">
      <div className="container">

        <div className="text_wrap" data-aos="zoom-out-right">
          <h1 className="fs-5060">
            <span className="blue">Telegram чат </span>
            на вашем сайте
          </h1>
          <p className="text fs-2434">
            Общение с клиентами станет простым и удобным, а подключение займет 5
            минут. Первый месяц — <span className="blue">бесплатно!</span>{" "}
          </p>
          <button className="btn">Подключить</button>
        </div>
        <div className="img_wrap" data-aos="fade-up">
          <img src={header} alt="header" />
        </div>
      </div>
    </div>
  );
}
