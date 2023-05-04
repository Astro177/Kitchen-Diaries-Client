/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ dish }) => {
  const { name, ingredients, cooking_method, rating } = dish;

  const [added, setAdded] = useState(false);
  const handleFavorite=()=>{
      setAdded(true)
      toast("Added To Favorite")
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-4xl text-color font-bold mb-4">
            {name}
          </h2>
          <p className="font-semibold text-xl mb-2">Ingredients:</p>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
          <p className="font-semibold text-xl mb-2 mt-4">Cooking Method:</p>
          <p>{cooking_method}</p>
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            className="text-yellow-400 mt-6"
            readOnly
          />
          <p className="font-semibold text-lg mb-2">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button onClick={handleFavorite} className={added?"btn":"btn-outlined"} disabled={added}>{added?"Added to favorite":"Add to favorite"}</button>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
