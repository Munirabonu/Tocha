import React, { useEffect } from "react";
import "./Style.scss";
import tochaOnlineImg from "../../medias/images/tocha-online__img.svg";
import telegram from "../../medias/images/telegram-icon.svg";
import asistent from "../../medias/images/asistent-icon.svg";
import custom from "../../medias/images/custom-girl-icon.svg";
import up from "../../medias/images/up-icon.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function TochaOnline() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="tocha-online">
      <div className="container">
        <div
          className="left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="fs-4832">Tocha Online — это</h2>
          <div className="left__info-content">
            <div className="box">
              <div className="image__box">
                <img src={telegram} alt="telegram-icon" />
              </div>
              <div className="title__box">
                <h6 className="fs-2432">Ничего лишнего</h6>
                <p className="fs-1626">
                  Отсутствие лишних приложений для операторов. Оператору не
                  нужно учиться работать с чатом
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image__box">
                <img src={up} alt="up-icon" />
              </div>
              <div className="title__box">
                <h6 className="fs-2432">Простота</h6>
                <p className="fs-1626">Простая установка на сайт</p>
              </div>
            </div>
            <div className="box">
              <div className="image__box">
                <img src={asistent} alt="asistent-icon" />
              </div>
              <div className="title__box">
                <h6 className="fs-2432">Несколько ассистентов</h6>
                <p className="fs-1626">
                  Возможность подключения нескольких ассистентов
                </p>
              </div>
            </div>
            <div className="box">
              <div className="image__box">
                <img src={custom} alt="custom-icon" />
              </div>
              <div className="title__box">
                <h6 className="fs-2432">Кастомизация</h6>
                <p className="fs-1626">Настройка интерфейса под нужды сайта</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right" data-aos="zoom-in-down">
          <img src={tochaOnlineImg} alt="tochaOnlineImg" />
        </div>
      </div>
    </div>
  );
}

export default TochaOnline;
