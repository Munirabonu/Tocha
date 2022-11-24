import React from "react";
import Generic from "../component/Generic/Index";
import TochaOnline from "../component/TochaOnline/Index";
import Tariffs from "../component/Tariffs/Index";
import Chat from "../component/JoinChat/Index"
import "../scss/styles";
export default function Home() {
  return (
    <div>
      <Chat/>
      {/* <Generic />
      <TochaOnline />
      <Tariffs /> */}
    </div>
  );
}
