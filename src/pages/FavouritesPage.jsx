import React, { useState } from "react";
import DefaultHeader from "../components/DefaultHeader";
import { STORAGE_KEYS } from "../constants/localStorage.constants";
import MealCard from "../components/MealCard";

function FavouritesPage() {
  const [favMeals, setFavMeals] = useState(() => {
    const storedFavMeals = localStorage.getItem(STORAGE_KEYS.fav_meals);
    return storedFavMeals ? JSON.parse(storedFavMeals) : [];
  });

  return (
    <>
      <DefaultHeader />

      {!favMeals ? (
        <div>No Favourite Meals, click head to add to favourites!</div>
      ) : (
        <div>
          <div className="p-2.5">
            <div className="text-3xl ">Favourites</div>
            <div className="text-sm ">
              Total Items : {favMeals && favMeals.length}
            </div>
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
