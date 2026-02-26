import React from "react";
import MealCard from "./MealCard";

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
              <MealCard key={recipe.idMeal} recipe={recipe} />
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default BodyComponent;
