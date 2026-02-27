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
                  <div className="col-span-full text-2xl inset-0 fixed flex justify-center items-center flex-col row-span-full">
                    <div>
                      <img
                        src="NoResultsFound.jpg"
                        alt=""
                        className=" w-50 md:w-62.5 "
                      />
                    </div>
                    <span>Sorry, no results found!</span>
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
