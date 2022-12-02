import React from "react";

import chatImg from "../../medias/images/chat-anim.png";

import "./Style.scss";

function Index() {
  return (
    <div className="chat container">
      <div className="img-box__chat">
        <img src={chatImg} alt="chatImg" />
      </div>
      <div className="content__chat">
        <h5 className="fs-3341">
          Подключите Telegram чат <br /> уже сегодня
        </h5>
        <div className="input-group">
          <input type="email" placeholder="Введите e-mail" />
          <button className="send-btn__chat fs-1420">Отправить</button>
        </div>
      </div>
    </div>
  );
}
// Don't be nervous!
export default Index;
