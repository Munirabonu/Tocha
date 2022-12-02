import React from "react";
import "./Style.scss";
import first from "../../medias/icons/first.png";
import second from "../../medias/icons/second.png";
import third from "../../medias/icons/third.png";
import four from "../../medias/icons/four.png";
import five from "../../medias/icons/five.png";
import six from "../../medias/icons/six.png";
function Index() {
  return (
    <div className="telgram-chat container">
      <h1 className="fs-4664">Всего 3 шага для подключения Telegram чата</h1>
      <div className="telegram-chat--top">
        <div className="top--card firstt">
          <div className="count">1</div>
          <div className="card--content">
            <h5 className="fs-1828">Telegram bot</h5>
            <p className="fs-1626">
              Вы создаёте Telegram бота <br /> для вашего сайта
            </p>
          </div>
        </div>
        {/* <div className="card--images">
          <div className="first-img">
            <img src={first} alt="" />
          </div>
          <div className="second-img">
            <img src={second} alt="" />
          </div>
          <div className="third-img">
            <img src={third} alt="" />
          </div>
        </div> */}

        <div className="top--card secondd">
          <div className="count">2</div>
          <div className="card--content">
            <h5 className="fs-1828">Подключение Tocha</h5>
            <p className="fs-1626">
              Tocha подключает Telegram бота <br /> к вашиму сайту
            </p>
          </div>
        </div>
        {/* <div className="card--images">
          <div className="first-img">
            <img src={first} alt="" />
          </div>
          <div className="second-img">
            <img src={second} alt="" />
          </div>
          <div className="third-img">
            <img src={third} alt="" />
          </div>
        </div> */}
        <div className="top--card thirdd">
          <div className="count">3</div>
          <div className="card--content">
            <h5 className="fs-1828">Telegram-чат</h5>
            <p className="fs-1626">
              Консультант отвечает <br /> на вопросы посетителей сайта
            </p>
          </div>
        </div>
      </div>

      <div className="telegram-chat--bottom"></div>

    

    </div>
  );
}

export default Index;
