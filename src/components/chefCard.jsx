/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { TbHeartFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { name, photo_url, id, experience, likes, recipes, bio } = chef;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo_url} alt="chef photo" className="w-52 h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-color  font-bold">{name}</h2>
          <p>Experience: {experience} Years</p>
          <p>Recipes: {recipes}</p>
          <div className="flex items-center gap-2">
            <div>
              <TbHeartFilled className="text-blue-700"></TbHeartFilled>
            </div>
            <div>{likes}</div>
          </div>
          <div className="card-actions justify-end">
            <Link to="/recipes"><button className="btn btn-outlined">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
