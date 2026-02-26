import React, { useContext } from "react";
import DefaultHeader from "../components/DefaultHeader";
import MealCard from "../components/MealCard";
import { FavoriteContext } from "../context/FavouriteContext";

function FavouritesPage() {
  const { favMeals, getFavCount } = useContext(FavoriteContext);
  const count = getFavCount();
  return (
    <>
      <DefaultHeader />

      {!count ? (
        <div>No Favourite Meals, click head to add to favourites!</div>
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
