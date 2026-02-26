import React, { useEffect, useState } from "react";
import { STORAGE_KEYS } from "../constants/localStorage.constants";
import { FavoriteContext } from "./FavouriteContext";

function FavoriteProvider({ children }) {
  const [favMeals, setFavMeals] = useState(() => {
    const favouriteMeals = localStorage.getItem(STORAGE_KEYS.fav_meals);
    return favouriteMeals ? JSON.parse(favouriteMeals) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.fav_meals, JSON.stringify(favMeals));
  }, [favMeals]);

  /*   const [isFav, setIsFav] = useState(false); */

  const handleToggleFavourite = (meal, element) => {
    element?.stopPropagation();
    console.log("handle toogle function called... ", meal.strMeal);
    setFavMeals((prevMeals) => {
      const requiredID = meal.idMeal;
      const exists = prevMeals.some((meal) => meal.idMeal === requiredID);
      if (exists) {
        // need to remove the item
        return prevMeals.filter((item) => item.idMeal !== requiredID);
        /*  setIsFav(false); */
      } else {
        return [...prevMeals, meal];
        /*   setIsFav(true); */
      }
    });
  };

  const checkIsFavourite = (idMeal) => {
    return favMeals.some((meal) => meal.idMeal === idMeal);
  };

  const getFavCount = () => {
    return favMeals.length;
  };

  return (
    <FavoriteContext.Provider
      value={{ handleToggleFavourite, favMeals, getFavCount, checkIsFavourite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
