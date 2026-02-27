import React from "react";
import MealCard from "./MealCard";
import CustomLoadingIndicator from "./loadingIndicator";

function BodyComponent({ mealsData, mealsLoading }) {
  return (
    <>
      <main className="">
        {/* grid section */}
        <div className="meal-card-grid mx-auto px-auto">
          {mealsLoading || !mealsData ? (
            mealsLoading ? (
              <CustomLoadingIndicator loadingText="Fetching Recipies" />
            ) : (
              !mealsData && (
                <>
                  <div className="col-span-full text-2xl top-62.5 left-[50%] -translate-x-1/2 fixed flex justify-center items-center flex-col row-span-full">
                    <div>
                      <img
                        src="NoResultsFound.jpg"
                        alt=""
                        className=" w-50 md:w-62.5 "
                      />
                    </div>
                    <span className="text-center">
                      Sorry, no results found!
                    </span>
                  </div>
                </>
              )
            )
          ) : (
            mealsData.map((recipe) => (
              <MealCard key={recipe.idMeal} recipe={recipe} />
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default BodyComponent;
