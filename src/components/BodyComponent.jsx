import React from "react";

import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";
import { Link } from "react-router-dom";

function BodyComponent({ mealsData, mealsLoading }) {
  return (
    <>
      <main className="">
        {/* grid section */}
        <div className="grid grid-cols-1 mx-auto px-auto justify-center items-center my-4 gap-3.5 max-w-[80vw] sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {mealsLoading || !mealsData ? (
            mealsLoading ? (
              <div className="col-span-full text-2xl flex justify-center items-center row-span-full">
                fetching menu...
              </div>
            ) : (
              !mealsData && (
                <>
                  <div className="col-span-full text-2xl flex justify-center items-center row-span-full">
                    No Meals Found
                  </div>
                </>
              )
            )
          ) : (
            mealsData.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-xl relative max-w-87.5 place-self-center hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={recipe.strMealThumb}
                    alt=""
                    className="flex flex-row object-contain w-full   hover:scale-110  duration-300"
                  />
                  <button className="bg-white rounded-full p-1.5 absolute top-2 right-2 ">
                    <SvgFavOutline className="size-8 " />
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
                    <Link to={`/meal-details/${recipe.strMeal}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default BodyComponent;
