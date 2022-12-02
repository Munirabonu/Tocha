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
      if (state.email == "" && state.password == "") {
        alert("Ro`yhatdan o`ting");
      } else if (state.email == item.email && state.password == item.password) {
        navigate("/home");
        dispatch(changeLoginAction({ current: true }));
      } else {
        alert("Siz ro`yhatdan o`tgansiz");
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email kiritishda xato qildingiz")
        .required("email kiriting"),
      password: Yup.string().required("password kiriting"),
    }),
  });

  return (
    <div className="sign_in">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Sign in</h1>
        <input
          type="text"
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
        <input type="submit" value="kirish" className="btn" />
        <p>
          Ro'yxatdan o'tmaganmisiz ?{" "}
          <Link to={"/signup"}>Ro`yhatdan o`tish</Link>
        </p>
      </form>
    </div>
  );
}
