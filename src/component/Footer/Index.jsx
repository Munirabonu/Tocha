import React from 'react'
import "./Style.scss";
import Flogo from "../../medias/images/logo.png";
function Index() {
  return (
    <div className="footer">
      <div className="footer--top container">
        <div className="footer--logo">
          <img src={Flogo} alt="" />
        </div>
        <div className="footer--content">
          <div className="tg-chat">
            <h6 className="fs-2030">Telegram чат</h6>
            <p className="fs-1626">О нас</p>
            <p className="fs-1626">Партнеры</p>
            <p className="fs-1626">Инструкция</p>
            <p className="fs-1626">Цены</p>
            <p className="fs-1626">Контакты</p>
          </div>
          <div className="support">
            <h6 className="fs-2030">Поддержка</h6>
            <p className="fs-1626">Центр поддержки</p>
            <p className="fs-1626">
              Политика <br /> конфеденциальности
            </p>
            <p className="fs-1626">Документы оферта</p>
            <p className="fs-1626">Документы оферта</p>
            <p className="fs-1626">Статус</p>
          </div>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="container">
          <p className='fs-1424'>© 2021 Tocha. Все права защищены</p>
        </div>
      </div>
    </div>
  );
}

export default Index