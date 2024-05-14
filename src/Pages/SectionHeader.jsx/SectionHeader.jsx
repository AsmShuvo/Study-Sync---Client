import React from "react";

const SectionHeader = ({ title, heading }) => {
  return (
    <div className="my-10">
      <hr className="mx-32" />
      <h2 className="text-red text-center font-bold text-xl md:text-4xl font-sans mt-4 mb-3">
        {title}
      </h2>
      <p className="text-blue-400 text-center md:text-xl font-mono mb-4 md:w-2/3 mx-3 md:mx-auto">
        {heading}
      </p>
      <hr className="mx-32" />
    </div>
  );
};

export default SectionHeader;
