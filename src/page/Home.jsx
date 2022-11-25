import React from "react";
import Generic from "../component/Generic/Index";
import TochaOnline from "../component/TochaOnline/Index";
import Tariffs from "../component/Tariffs/Index";
import Chat from "../component/JoinChat/Index";
import Footer from "../component/Footer/Index";
import "../scss/styles";
import Feedback from "../component/Feedback/Index";
import TelegramChat from "../component/TelegramChat/Index"
export default function Home() {
  return (
    <div>
      <TelegramChat/>
      {/* <Generic />
      <TochaOnline />
      <Tariffs />
      <Feedback />
      <Chat />
      <Footer /> */}
    </div>
  );
}
