import React from "react";
import "./Style.scss";
import tochaOnlineImg from "../../medias/images/tocha-online__img.png";
import telegram from "../../medias/images/telegram-icon.png";
import asistent from "../../medias/images/asistent-icon.png";
import custom from "../../medias/images/custom-girl-icon.png";
import up from "../../medias/images/up-icon.png";
function Index() {
  return (
    <div className="tocha-online container">
      <div className="left">
        <h2 className="fs-4832">Tocha Online — это</h2>
        <div className="left__info-content">
          <div className="box">
            <div className="box__image">
              <img src={telegram} alt="telegram-icon" />
            </div>
            <div className="title__box">
              <h6 className="fs-2432">Ничего лишнего</h6>
              <p className="fs-1626">
                Отсутствие лишних приложений для операторов. Оператору не нужно
                учиться работать с чатом
              </p>
            </div>
          </div>
          <div className="box">
            <div className="image__image">
              <img src={up} alt="up-icon" />
            </div>
            <div className="title__box">
              <h6 className="fs-2432">Простота</h6>
              <p className="fs-1626">Простая установка на сайт</p>
            </div>
          </div>
          <div className="box">
            <div className="image__image">
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
            <div className="image__image">
              <img src={custom} alt="custom-icon" />
            </div>
            <div className="title__box">
              <h6 className="fs-2432">Кастомизация</h6>
              <p className="fs-1626">Настройка интерфейса под нужды сайта</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={tochaOnlineImg} alt="tochaOnlineImg" />
      </div>
    </div>
  );
}

export default Index;
