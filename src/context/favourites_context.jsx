import React, { Children, createContext, useState } from "react";
import { STORAGE_KEYS } from "../constants/localStorage.constants";

export const FavouritesContext = createContext();
function favourites_context() {
   const [favMeals, setFavMeals] = useState(() => {
      const favouriteMeals = localStorage.getItem(STORAGE_KEYS.fav_meals);
      return favouriteMeals ? JSON.parse(favouriteMeals) : [];
    });
    const [isFav, setIsFav] = useState(false);


    const handleToggleFavourite = (meal, element ) =>{
      
    }

  return <FavouritesContext.Provider value={}>{Children}</FavouritesContext.Provider>
}

export default favourites_context;
