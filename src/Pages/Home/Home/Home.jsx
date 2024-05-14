import React from "react";
import Banner from "../Banner/Banner";
import Assignment from "../Assignment/Assignment";
import Assignments from "../Assignments/Assignments";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import AssignmentDetails from "../AssignmentDetails/AssignmentDetails";
import SectionHeader from "../../SectionHeader.jsx/SectionHeader";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionHeader
        title="Assignments you can explore"
        heading="Delve into the depths of literary exploration through our comprehensive assignment section. Engage with thought-provoking tasks designed to enhance your understanding and critical analysis of the texts studied in StudySync"
      />
      <Assignments />
      <SectionHeader
        title="Features we contain"
        heading="Discover the array of powerful tools and resources available within StudySync. From interactive assignments to collaborative discussions, unlock a world of learning possibilities tailored to your educational journey."
      />
      <Features />
      <SectionHeader
        title="Frequently Asked Questions"
        heading="Navigate common queries with ease through our Frequently Asked Questions (FAQ) section. Find solutions, tips, and insights to maximize your StudySync experience."
      />
      <FAQ />
    </div>
  );
};

export default Home;
