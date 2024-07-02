import React from "react";
import Feature from "../Feature/Feature";

const Features = () => {
  return (
    <div className="mx-auto">
      <div className="grid mx-auto grid-cols-1 gap-2 w-fit ">
        <Feature
          title="Interactive Learning"
          desc="Highlight how your platform offers interactive learning experiences, such as quizzes, simulations, or interactive tutorials"
          ratings={5}
          img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <Feature
          title="Community Engagement"
          desc="Showcase the vibrant learning community on your platform, where users can connect with like-minded individuals, share insights, and seek advice."
          ratings={4}
          img="https://plus.unsplash.com/premium_photo-1661510087854-bcc116f910da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Feature
          title="Collaborative Study"
          desc="Showcase how users can collaborate with peers on group assignments, share notes, or participate in study groups"
          ratings={3}
          img="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Feature
          title="Integration with Learning Tools"
          desc="Highlight any integrations with popular learning tools or platforms, making it easier for users to access additional resources or tools they may already use."
          ratings={4}
          img="https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Features;
