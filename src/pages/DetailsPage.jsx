import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";
import SvgFavFilled from "../assets/svg/favourite-filled.svg?react";
import { fetchMealID } from "../services/mealServices";
import { structureIngridients } from "../util/createIngredientsUtil";
import { STORAGE_KEYS } from "../constants/localStorage.constants";
import DefaultHeader from "../components/DefaultHeader";
import { FavoriteContext } from "../context/FavouriteContext";
import CustomLoadingIndicator from "../components/loadingIndicator";

function DetailsPage() {
  const { mealID } = useParams();
  const [mealDetails, setMealDetails] = useState([]);
  const [mealIngredients, setMealIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  const { handleToggleFavourite, checkIsFavourite } =
    useContext(FavoriteContext);
  const isFav = checkIsFavourite(mealID);
  /* useEffects */
  useEffect(() => {
    const fetchSelectedMeal = async () => {
      try {
        const response = await fetchMealID(mealID);
        const structured = structureIngridients(response);
        setMealDetails(response);
        console.log("meal details", response);
        setMealIngredients(structured);

        setLoading(false);
      } catch (error) {
        console.error("Failed fetching item details", error);
        setLoading(false);
      }
    };

    fetchSelectedMeal();
  }, [mealID]);

  return (
    <>
      <DefaultHeader />
      {/* menu details section */}
      <section className=" px-7 sm:px-14 md:px-32 lg:px-44 py-5 bg-amber-50 min-h-dvh">
        {loading || !mealDetails ? (
          loading ? (
            <CustomLoadingIndicator loadingText="Fetching Item Details" />
          ) : (
            !mealDetails && <div>Details for {mealID} is not found</div>
          )
        ) : (
          mealDetails.map((meal) => {
            return (
              <div key={meal.idMeal}>
                {/* card */}
                <div
                  /*  key={meal.idMeal} */
                  className=" flex flex-col rounded-2xl overflow-hidden shadow-xl relative max-h-[60vh]  hover:shadow-2xl bg-white"
                >
                  <div className="overflow-hidden">
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="flex flex-row object-cover w-full hover:scale-110  duration-300 relative"
                    />
                    <button
                      onClick={(e) => {
                        handleToggleFavourite(meal, e);
                      }}
                      className="bg-white rounded-full p-1.5 absolute top-2 right-2 active:animate-ping"
                    >
                      {isFav ? (
                        <SvgFavFilled className="size-8" />
                      ) : (
                        <SvgFavOutline className="size-8" />
                      )}
                    </button>
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="hidden 2xl:block hover:scale-110 size-70 shadow-2xl rounded-4xl border-4 border-white  bottom-25 left-12.5 absolute duration-300 "
                    />
                  </div>

                  <div className=" bg-white m-4 ">
                    <div className="flex justify-between">
                      <span className="text-2xl">{meal.strMeal}</span>
                      <span className="text-sm py-0.5 px-1.5 rounded-sm  bg-gray-200 flex align-baseline justify-end h-fit">
                        {meal.strCategory}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ingredients and instructions */}
                <div className="flex flex-wrap  w-full gap-x-11 gap-y-4 px-2.5 py-8">
                  {/* Ingridients */}
                  <div className="flex-1 h-fit details-card">
                    <h1 className="text-3xl ">Ingredients</h1>
                    <div className="flex gap-0.5 flex-col">
                      {mealIngredients.map((ingredient, index) => (
                        <p key={index}>
                          {/*  {index + 1}
                          {`)`} */}

                          {ingredient}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="flex-3 details-card">
                    <h1 className="text-3xl">Instructions</h1>
                    <p className="whitespace-pre-line">
                      {/* {meal.strInstructions
                        .split(/\r+\n+/)
                        .map((text, index) => {
                          return (
                            <p key={index}>
                              {index + 1}. {text}
                            </p>
                          );
                        })} */}
                      {meal.strInstructions}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

export default DetailsPage;
