import React from "react";
import Banner from "../Banner/Banner";
import Assignment from "../Assignment/Assignment";
import Assignments from "../Assignments/Assignments";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <Assignments />
      <Features />
      <FAQ />
    </div>
  );
};

export default Home;
