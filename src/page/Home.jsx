import React from "react";
import Header from "../component/Header/Index";
import Navbar from "../component/Navbar/Index";
import TochaOnlineCn from "../component/TochaOnlineCn/Index";
import Tariffs from "../component/Tariffs/Index";
import Chat from "../component/JoinChat/Index";
import Footer from "../component/Footer/Index";
import "../scss/styles";
import Feedback from "../component/Feedback/Index";
import TelegramChat from "../component/TelegramChat/Index";
import "./style.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <TochaOnlineCn />
      <Tariffs />
      <TelegramChat />
      <Feedback />
      <Chat />
      <Footer />
    </div>
  );
}
