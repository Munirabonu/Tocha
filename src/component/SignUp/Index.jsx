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
        navigate("/signin");
      } else {
        navigate("/home");
        dispatch(changeLogOutAction({ ...item, current: true }));
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bведите ваше имя."),
      email: Yup.string()
        .required("введите адрес электронной почты")
        .email("Вы ошиблись при вводе адреса электронной почты"),
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
          id="name"
          name="name"
          placeholder="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <label htmlFor="name">{formik.errors.name}</label>
        ) : null}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Эл. адрес"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <label htmlFor="email">{formik.errors.email}</label>
        ) : null}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <label htmlFor="password">{formik.errors.password}</label>
        ) : null}
        <button type="submit" className="btn"  >
          Регистрация
        </button>
      </form>
    </div>
  );
}
