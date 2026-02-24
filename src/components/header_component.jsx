import React from "react";

function HeaderComponent() {
  return (
    <>
      <header className="bg-white h-52 w-full px-2.5 py-1.5 shadow-xl">
        <div>
          <h1 className="text-5xl ">Recipedia</h1>
          <div className="flex justify-center items-center bg-amber-50 my-10">
            <input
              type="text"
              className="text-2xl border-2 border-amber-500 rounded-md "
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
