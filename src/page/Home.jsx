import React from "react";
import Generic from "../component/Generic/Index";
import TochaOnline from "../component/TochaOnline/Index";
import Tariffs from "../component/Tariffs/Index"
import "../scss/styles";
export default function Home() {
  return (
    <div>
      <Generic />
      {/* <TochaOnline /> */}
      <Tariffs/>
    </div>
  );
}
