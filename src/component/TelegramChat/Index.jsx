import React from "react";
import "./Style.scss";
import phone1 from "../../medias/icons/phone1.svg";
import phone2 from "../../medias/icons/phone2.svg";
import phone3 from "../../medias/icons/phone3.svg";
function Index() {
  return (
    <div className="telgram-chat">
      <div className="container">
        <h1 className="fs-4664">Всего 3 шага для подключения Telegram чата</h1>
        <div className="telegram-chat--top">
          <div className="top--card">
            <div className="count">1</div>
            <div className="card--content">
              <h5 className="fs-1828">Telegram bot</h5>
              <p className="fs-1626">
                Вы создаёте Telegram бота <br /> для вашего сайта
              </p>
            </div>
          </div>
          <div className="top--card">
            <div className="count">2</div>
            <div className="card--content">
              <h5 className="fs-1828">Подключение Tocha</h5>
              <p className="fs-1626">
                Tocha подключает Telegram бота <br /> к вашиму сайту
              </p>
            </div>
          </div>
          <div className="top--card">
            <div className="count">3</div>
            <div className="card--content">
              <h5 className="fs-1828">Telegram-чат</h5>
              <p className="fs-1626">
                Консультант отвечает <br /> на вопросы посетителей сайта
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="telegram-chat--bottom">
        <div className="container">
          <div className="img-box__bottom">
          <img src={phone1} alt="phone icon" />
        </div>
        <div className="img-box__bottom">
          <img src={phone2} alt="phone icon" />
        </div>
        <div className="img-box__bottom">
          <img src={phone3} alt="phone icon" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
