/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefCard from "./chefCard";
import Sections from "./Sections";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-astro177.vercel.app/chefdata")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <Banner />
      <p className="text-center font-semibold text-5xl text-color mb-12">
        Our finest chef`s and their details
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 my-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
      <LazyLoad>
        <div>
          <Sections />
        </div>
      </LazyLoad>
      <LazyLoad>
        <div>
          <Sections />
        </div>
      </LazyLoad>
    </div>
  );
};

export default Home;
