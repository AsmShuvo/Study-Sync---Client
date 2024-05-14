import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { AuthContext } from "../Providers/AuthProviders";

const Root = () => {
  const { myTheme } = useContext(AuthContext);
  return (
    <div className={`${myTheme == "light" ? "bg-white" : "bg-darkBlue"}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
