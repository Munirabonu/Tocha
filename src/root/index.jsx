import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../component/Loading/Index";
const Home=React.lazy(()=>import("../page/Home"))
const SignUp=React.lazy(()=>import("../component/SignUp/Index"))
const SignIn=React.lazy(()=>import("../component/SignIn/Index"))

export const Root = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </React.Suspense>
  );
};
