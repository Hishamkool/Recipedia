import React from "react";
import { MODELMEALDATA } from "../constants/ModelData";
import SvgFavOutline from "../assets/svg/favourite-outline.svg?react";
function BodyComponent() {
  const meals = MODELMEALDATA.meals;
  return (
    <>
      <main className="bg-gray-100   ">
        {/* grid section */}
        <div className="grid grid-cols-1 mx-auto px-auto justify-center items-center my-4 gap-3.5 max-w-[80vw] sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {meals.map((recipe) => {
            {
              /* card */
            }
            return (
              <div
                key={recipe.idMeal}
                className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-2xl relative max-w-87.5 place-self-center"
              >
                <div>
                  <img
                    src={recipe.strMealThumb}
                    alt=""
                    className="flex flex-row object-contain w-full"
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
                    <button>View Details</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default BodyComponent;
