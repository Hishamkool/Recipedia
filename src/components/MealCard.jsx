import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";
import SvgFavFilled from "../assets/svg/favourite-filled.svg?react";
import { FavoriteContext } from "../context/FavouriteContext";

function MealCard({ recipe }) {
  const navigate = useNavigate();
  const { handleToggleFavourite, checkIsFavourite } =
    useContext(FavoriteContext);
  const isFav = checkIsFavourite(recipe.idMeal);
  return (
    <div
      className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl relative max-w-87.5 min-w-50 min-h-50 place-self-center hover:shadow-2xl"
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
            handleToggleFavourite(recipe, e);
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
