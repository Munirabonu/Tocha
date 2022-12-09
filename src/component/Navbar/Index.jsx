import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import burger from "../../assets/icons/burger.png";
import close_icon from "../../assets/icons/close.png";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLogOutAction } from "../../redux/action/login_action";
import { useScroll } from "../../hook/position";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const scrollCount=useScroll()
  console.log(scrollCount);
  function menu_Open() {
    setOpen(!open);
  }
  const sign_in = () => navigate("/signin");
  const sign_up = () => navigate("/signup");

  function click_logout() {
    navigate("/");
    dispatch(changeLogOutAction({ ...state, current: false }));
  }

  return (
    <div className={scrollCount>5 ? 'navbar scroll':'navbar'}>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className={open ? "mobile_menu close" : "mobile_menu open"}>
          <img
            src={close_icon}
            alt="close_icon"
            className="close_icon"
            onClick={menu_Open}
          />
          {state.current ? (
            <ul className="links">
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
                <Link className="fs-1626" to="/" onClick={click_logout}>
                  Выход
                </Link>
              </li>
            </ul>
          ) : (
            <div className="button_group">
              <button onClick={sign_in} className="btn-light sign_in">
                Вход
              </button>
              <button onClick={sign_up} className="btn sign_up">
                Регистрация
              </button>
            </div>
          )}
        </div>

        <img src={burger} className="burger" alt="burger" onClick={menu_Open} />
      </div>
    </div>
  );
}
