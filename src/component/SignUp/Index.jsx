import React from "react";
import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changeLogOutAction } from "../../redux/action/login_action";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const state = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (item) => {
      if (state.email === item.email && state.password === item.password) {
        alert("Вы зарегистрированы");
        navigate("/signin");
      } else {
        navigate("/home");
        dispatch(changeLogOutAction({ ...item, current: true }));
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bведите ваше имя."),
      email: Yup.string()
        .email("Вы ошиблись при вводе адреса электронной почты")
        .required("введите адрес электронной почты"),
      password: Yup.string()
        .max(8, "Должно быть меньше 8 элементов")
        .min(3, "Элементов должно быть больше 3")
        .required("Bведите пароль."),
    }),
  });

  return (
    <div className="sign_up">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Регистрация</h1>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          placeholder="Имя"
        />
        <label htmlFor="email">{formik.errors.name}</label>
        <input
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          placeholder="Эл. адрес"
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
        {/* <input type="submit" value="" className="btn" /> */}
        <button type="submit" className="btn">Регистрация</button>
      </form>
    </div>
  );
}
