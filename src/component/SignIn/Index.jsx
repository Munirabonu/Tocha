import React from "react";
import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeLoginAction } from "../../redux/action/login_action";

export default function SignIn() {
  const state = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (item) => {
      if (state.email === "" && state.password === "") {
        alert("Pегистр");
      } else if (state.email === item.email && state.password === item.password) {
        navigate("/home");
        dispatch(changeLoginAction({ current: true }));
      } else {
        alert("Вы зарегистрированы");
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Вы ошиблись при вводе адреса электронной почты")
        .required("введите адрес электронной почты"),
      password: Yup.string().required("Bведите пароль"),
    }),
  });

  return (
    <div className="sign_in">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Вход</h1>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          placeholder="Эл.адрес"
        />
        <label htmlFor="email">{formik.errors.email}</label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          placeholder="Пароль"
        />
        <label htmlFor="password">{formik.errors.password}</label>
        <input type="submit" value="kirish" className="btn" />
        <p>
          Не зарегистрирован? ? <Link to={"/signup"}>Регистрация</Link>
        </p>
      </form>
    </div>
  );
}
