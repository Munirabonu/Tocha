import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../component/SignIn/Index";
import SignUp from "../component/SignUp/Index";
import Home from "../page/Home";

export const Root = () => {
  return (
    <Routes> 
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};


