/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TbHeartFilled } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import LazyLoad from "react-lazy-load";

const RecipeDetails = () => {
  const chef = useLoaderData();
  const [recipe, setRecipe] = useState([]);

  const { name, photo_url, experience, likes, recipes, bio } = chef;

  useEffect(() => {
    fetch("https://assignment-10-server-astro177.vercel.app/recipedata")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <div>
      <div className="my-container flex justify-center items-center">
        <div className="card card-side bg-base-100 shadow-xl rounded-2xl">
          <figure>
            <img src={photo_url} alt="Chef" className="p-6" />
          </figure>
          <div className="flex flex-col justify-center gap-6 mr-4">
            <h2 className="card-title text-4xl text-color font-bold">{name}</h2>
            <p className="text-slate-400">{bio}</p>
            <div className="font-semibold flex flex-col gap-4">
              <p>Experience: {experience} Years</p>
              <p>Recipes: {recipes}</p>
              <div className="flex items-center gap-2">
                <div>
                  <TbHeartFilled className="text-blue-700"></TbHeartFilled>
                </div>
                <div>{likes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LazyLoad>
        <div className="my-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {recipe.map((dish) => (
            <RecipeCard key={dish.name} dish={dish} />
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};

export default RecipeDetails;
