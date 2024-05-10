import React from "react";

const Feature = ({ title, desc, ratings, img }) => {
  return (
    <div className="mx-auto">
      <div>
        <div
          className={`flex h-52 flex-col rounded-lg bg-red text-surface shadow-secondary-1 dark:bg-surface-dark p-1 dark:text-white md:max-w-xl md:flex-${
            ratings % 2 ? "row-reverse" : "row"
          }`}
        >
          <img
            className=" h-auto w-full rounded-t-lg object-cover md:h-auto md:w-48 rounded"
            src={img}
            alt=""
          />
          <div className="flex flex-col  justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-white">{title}</h5>
            <p className="mb-4 text-base text-white">{desc}</p>
            <p className="text-white">Ratings: {ratings}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
