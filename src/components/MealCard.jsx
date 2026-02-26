import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";
import SvgFavFilled from "../assets/svg/favourite-filled.svg?react";
import { STORAGE_KEYS } from "../constants/localStorage.constants";

function MealCard({ recipe }) {
  const navigate = useNavigate();
  const [currentRecipe, setCurrentRecipe] = useState(recipe);
  const [favMeal, selectFavMeal] = useState(() => {
    const preStored = localStorage.getItem(STORAGE_KEYS.fav_meals);
    return preStored ? JSON.parse(preStored) : [];
  });
  const [isFav, setIsFav] = useState(() => {
    if (!favMeal) return false;
    const requiredID = currentRecipe.idMeal;
    const exists = favMeal.some((meal) => meal.idMeal === requiredID);
    if (exists) {
      return true;
    } else {
      return false;
    }
  });

  const handleToogleFav = (e) => {
    e.stopPropagation();
    let favourites = favMeal;
    const requiredID = currentRecipe.idMeal;
    const exists = favourites.some((meal) => meal.idMeal === requiredID);
    if (exists) {
      setIsFav(false);
      favourites.filter((item) => item.idMeal !== requiredID);
    } else {
      setIsFav(true);
      favourites.push(currentRecipe);
    }
    selectFavMeal(favourites);
    console.log(favourites);
    localStorage.setItem(STORAGE_KEYS.fav_meals, JSON.stringify(favourites));
  };

  useEffect(() => {
    setCurrentRecipe(recipe);
  }, [recipe]);

  return (
    <div
      className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl relative max-w-87.5 place-self-center hover:shadow-2xl"
      onClick={() => {
        navigate(`/meal-details/${recipe.idMeal}`);
      }}
    >
      <div className="overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt=""
          className="flex flex-row object-cover w-full hover:scale-110 duration-300"
        />
        <button
          onClick={(e) => {
            handleToogleFav(e);
          }}
          className="bg-white rounded-full p-1.5 absolute top-2 right-2 active:animate-ping"
        >
          {isFav ? (
            <SvgFavFilled className="size-8" />
          ) : (
            <SvgFavOutline className="size-8" />
          )}
        </button>
      </div>

      <div className=" bg-white m-4 ">
        <div className="flex justify-between">
          <span className="text-2xl">{recipe.strMeal}</span>
          <span className="text-sm py-0.5 px-1.5 rounded-sm  bg-gray-200 flex align-baseline justify-end h-fit">
            {recipe.strCategory}
          </span>
        </div>
        <div className="mt-4 ring ring-[#2CA9BC] font-medium p-1.5 w-fit rounded-sm shadow   hover:text-white hover:bg-[#2CA9BC] ">
          <Link to={`/meal-details/${recipe.idMeal}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
