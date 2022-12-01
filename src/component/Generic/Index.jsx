import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Generic() {
  const state=useSelector((state)=>state.login)
  console.log(state);
  return <div>Generic</div>;
}
