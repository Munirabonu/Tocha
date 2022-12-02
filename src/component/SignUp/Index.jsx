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
      if (state.email == item.email && state.password == item.password) {
        alert("Siz ro`yhatdan otgansiz");
        navigate("/signin");
      } else {
        navigate("/home");
        dispatch(changeLogOutAction({ ...item, current: true }));
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("ismingizni kiriting."),
      email: Yup.string()
        .email("email kiritishda xato qildingiz.")
        .required("email kiriting."),
      password: Yup.string()
        .max(8, "8 elementdan kam bo`lishi kerak")
        .min(3, "3 elementdan ko`p bolishi kerak")
        .required("password kiriting."),
    }),
  });

  return (
    <div className="sign_un">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Sign Up</h1>
        <input
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          placeholder="Name"
        />
        <label htmlFor="email">{formik.errors.name}</label>
        <input
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          placeholder="Email"
        />
        <label htmlFor="email">{formik.errors.email}</label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="password"
          placeholder="Password"
        />
        <label htmlFor="password">{formik.errors.password}</label>
        <input type="submit" value="kirish" className="btn"/>
      </form>
    </div>
  );
}
