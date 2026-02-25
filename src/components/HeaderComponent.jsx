import React from "react";

function HeaderComponent() {
  return (
    <>
      <header className="bg-white h-52 w-full px-2.5 py-1.5 shadow-xl sticky top-0 z-50">
        <div>
          <div className="flex flex-row justify-between gap-1.5 items-end">
            <h1 className="text-5xl ">Recipedia</h1>
            <button
              className="group: ring-1  ring-amber-600
            hover:bg-red-500 text-red-400 hover:text-amber-50
            py-1.5 px-2.5 rounded-xl shadow-2xs shadow-amber-600"
            >
              <span className=" font-semibold text-center">Favourites</span>
            </button>
          </div>
          <div className="flex justify-center items-center  mt-14 ">
            <input
              type="text"
              className="text-2xl border-2 rounded-md px-2.5 py-1 w-screen mx-20"
              placeholder="Search Recipies..."
              name="search-recipe"
              id="search-recipe"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
