import React from "react";
import Footer from "../footer/footer";
import Topnav from "../navbar/topnav";

export default function Layout(props) {
  return (
    <div>
      <Topnav />
      {props.children}
      <Footer />
    </div>
  );
}
