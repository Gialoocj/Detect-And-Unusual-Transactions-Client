import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className=" text-[15px]">
        <Header></Header>
      </div>
      <div>{children}</div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DefaultLayout;
