import React from "react";
import MealCard from "./MealCard";

function BodyComponent({ mealsData, mealsLoading }) {
  return (
    <>
      <main className="">
        {/* grid section */}
        <div className="meal-card-grid mx-auto px-auto">
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
