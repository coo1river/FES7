import React from "react";
import Article from "../component/mainpage/Article";
import Header from "../component/mainpage/Header";
import Aside from "../component/mainpage/Aside";
import Footer from "../component/mainpage/Footer";

export default function Mainpage() {
  return (
    <div>
      <Header />
      <Article />
      <Aside />
      <Footer />
    </div>
  );
}
