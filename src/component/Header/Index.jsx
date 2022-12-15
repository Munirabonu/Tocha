import React, { useEffect } from "react";
import "./style.scss";
import header from "../../assets/images/header.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import {  useSelector } from "react-redux";


export default function Header() {

  const state = useSelector((state) => state.login);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  useEffect(()=>{
    if (state.current) {
      toast.success("Вы успешно из в систему", {
        style: {
          background: "rgb(104,94,214)",
          color: "white",
          border: "1px solid #00715c8d",
        },
        duration:4000,
        position: "bottom-right",
      });
    }
  },[state.current])
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
      <Toaster />
    </div>
  );
}
