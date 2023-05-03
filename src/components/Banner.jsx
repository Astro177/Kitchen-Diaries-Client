/* eslint-disable no-unused-vars */
import React from "react";
import Cook from "../assets/cooker.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div>
      <div className="flex sm:flex-col md:flex-row justify-around items-center my-container">
        <div>
          <Lottie animationData={Cook} />
        </div>
        <div>
          <h2 className="text-7xl font-bold  text-color">
            Kitchen <br />
            <span className="mx-16">Dairies</span> <br />
          </h2>
          <p className="text-2xl font-semibold text-slate-200 mt-12 mb-12">
            Try out your favorite chef`s best dishes
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
