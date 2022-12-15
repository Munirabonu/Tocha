import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


import chatImg from "../../medias/images/chat-anim.png";
import "./Style.scss";

function Index() {

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Вы ошиблись")
        .required("введите")
    }),
  });



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
          <div>
            <input
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              placeholder="Введите e-mail"
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error" htmlFor="email">{formik.errors.email}</p>
            ) : null}
          </div>
          <button className="send-btn__chat fs-1420">Отправить</button>
        </div>
      </div>
    </div>
  );
}
// Don't be nervous!
export default Index;
