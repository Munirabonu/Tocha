import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/icons/burger.png";
import close_icon from "../../assets/icons/close.png";

import "./style.scss";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const [token, setToken] = useState(true);

  const navigate = useNavigate();

  function menu_Open() {
    setOpen(!open);
  }
  const sign_in = () => navigate("/signin");
  const sign_up = () => navigate("/signup");

  return (
    <div className="navbar container">
      <img src={logo} alt="logo" className="logo" />
      <div className={open ? "mobile_menu close" : "mobile_menu open"}>
        <img
          src={close_icon}
          alt="close_icon"
          className="close_icon"
          onClick={menu_Open}
        />
        {/* <ul className='links'>
          <li className="link_item">
            <Link className="fs-1626" to="/">
              Подключение
            </Link>
          </li>

          <li className="link_item">
            <Link className="fs-1626" to="/">
              Оплата
            </Link>
          </li>
          <li className="link_item">
            <Link className="fs-1626" to="/">
              Контакты
            </Link>
          </li>
          <li className="link_item">
            <Link className="fs-1626" to="/">
              Выход
            </Link>
          </li>
        </ul> */}
        <div className="button_group">
          <button onClick={sign_in} className="btn sign_in">
            Вход
          </button>
          <button onClick={sign_up} className="btn sign_up">
            Регистрация
          </button>
        </div>
      </div>

      <img src={burger} className="burger" alt="burger" onClick={menu_Open} />
    </div>
  );
}
