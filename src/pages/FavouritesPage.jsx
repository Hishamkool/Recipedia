import React, { useContext } from "react";
import DefaultHeader from "../components/DefaultHeader";
import MealCard from "../components/MealCard";
import { FavoriteContext } from "../context/FavouriteContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/Routes";

function FavouritesPage() {
  const navigate = useNavigate();
  const { favMeals, getFavCount } = useContext(FavoriteContext);
  const count = getFavCount();
  return (
    <>
      <DefaultHeader isNotFavPage={false} />

      {!count ? (
        <div className="fixed inset-0  text-center flex flex-col gap-4 items-center justify-center   border ">
          <span className="text-2xl">
            No Favourite Meals, click 💓 to add to favourites!
          </span>
          <button
            className="text-3xl border p-3.5 rounded-2xl shadow-md border-gray-400 cursor-pointer hover:bg-amber-200"
            onClick={() => navigate(ROUTES.home)}
          >
            🏠Home
          </button>
        </div>
      ) : (
        <div>
          <div className="p-2.5">
            <div className="text-3xl ">Favourites</div>
            <div className="text-sm ">Total Items : {count}</div>
          </div>

          <div className="meal-card-grid mx-auto px-auto">
            {favMeals.map((meal) => (
              <MealCard key={meal.idMeal} recipe={meal} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default FavouritesPage;
