import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STORAGE_KEYS } from "../constants/localStorage.constants";
import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";

function DetailsPage() {
  const { mealName } = useParams();
  const navigate = useNavigate();

  const [mealDetails, setMealDetails] = useState(() => {
    /*  const dataInStorage = localStorage.getItem(STORAGE_KEYS.meal_details); */
    return /* dataInStorage ? dataInStorage : */ [];
  });
  const [mealInstructions, setMealInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  /* functions */
  function createIngridients(strInstructions) {
    strInstructions = strInstructions ?? mealDetails.strInstructions;
    if (strInstructions) {
      const splitInstructions = strInstructions.split(/\r?\n\d+\r?\n/);
      setMealInstructions(splitInstructions);
      console.log(splitInstructions);
    }
  }

  const fetchSelectedMeal = async () => {
    await axios
      // .get(`${API_LINK}+${mealName}`)
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((response) => {
        const responseData = response.data.meals;
        setMealDetails(responseData);
        localStorage.setItem(
          STORAGE_KEYS.meal_details,
          JSON.stringify(mealDetails),
        );
        console.log(responseData);
        setLoading(false);
        createIngridients(responseData.strInstructions);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  /* useEffects */
  useEffect(() => {
    fetchSelectedMeal();
  }, []);

  return (
    <>
      <header className="bg-white h-12 w-full px-2.5 py-1.5 shadow-2xl sticky top-0 z-50">
        <div>
          <button onClick={() => navigate(-1)}> ← back</button>
        </div>
      </header>
      {/* menu details section */}
      <section className="px-7 py-5">
        {loading || !mealDetails ? (
          loading ? (
            <div>Loading...</div>
          ) : (
            !mealDetails && <div>No details found</div>
          )
        ) : (
          mealDetails.map((meal) => {
            return (
              <>
                {/* card */}
                <div
                  key={meal.idMeal}
                  className=" flex flex-col rounded-2xl overflow-hidden shadow-xl relative max-w-87.5 place-self-center hover:shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="flex flex-row object-contain w-full   hover:scale-110  duration-300"
                    />
                    <button className="bg-white rounded-full p-1.5 absolute top-2 right-2 ">
                      <SvgFavOutline className="size-8 " />
                    </button>
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

                {/* Ingridients */}
                <div>
                  <h2>Ingridients</h2>
                  <div>{meal.strIngredient1}</div>
                </div>
                {/* Instructions */}

                <div className="w-full p-1.5">
                  <h2>Instructions</h2>
                  <span className="">
                    {mealInstructions.forEach((inst) => {
                      return <div>{inst}</div>;
                    })}
                  </span>
                </div>
              </>
            );
          })
        )}
      </section>
    </>
  );
}

export default DetailsPage;
