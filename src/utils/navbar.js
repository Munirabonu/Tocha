// components
import React from "react";
import SignIn from "../component/SignIn/Index";
import SignUp from "../component/SignUp/Index";

export const navbar = [
  {
    id: 1,
    title: "SignIn",
    path: "/signin",
    element: <SignIn />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "SignUp",
    path: "/signup",
    element: <SignUp />,
    search: "?",
    hidden: false,
    private: true,
  }
];


