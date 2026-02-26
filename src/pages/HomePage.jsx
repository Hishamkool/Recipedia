import React, { useEffect, useState } from "react";
import HeaderHome from "../components/HeaderHome";
import BodyComponent from "../components/BodyComponent";
/* import axios from "axios"; */
import { getAllMeals, searchMeals } from "../services/mealServices";
import { STORAGE_KEYS } from "../constants/localStorage.constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
function HomePage() {
  const navigate = useNavigate();
  const [mealsData, setMealsData] = useState([]);
  const [mealsLoading, setMealsLoading] = useState(true);

  //useEffect
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await getAllMeals();
        setMealsData(response);
        console.log(response);
        setMealsLoading(false);
      } catch (error) {
        console.error("Error fetching meals", error);
        setMealsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  //functions
  const navigateFavPage = () => {
    console.log("navigating to fav page ...");
    navigate(ROUTES.favourites);
  };

  const handleSearchItem = async (searchValue) => {
    console.log("search button clicked", searchValue);
    try {
      setMealsLoading(true);
      const response = await searchMeals(searchValue);
      setMealsData(response);
      console.log(response);
      setMealsLoading(false);
    } catch (error) {
      console.error("Errror fetching search querry", error);
      setMealsLoading(false);
    }
  };
  return (
    <>
      <HeaderHome
        handleSearchItem={handleSearchItem}
        navigateFavPage={navigateFavPage}
      />
      <BodyComponent mealsData={mealsData} mealsLoading={mealsLoading} />
    </>
  );
}

export default HomePage;
