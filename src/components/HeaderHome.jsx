import React, { useState } from "react";
import SerachIcon from "../assets/svg/search.svg?react";

import FavouritesButton from "./FavouritesButton";
function HeaderHome({ handleSearchItem }) {
  const [serachValue, setSearchValue] = useState("");
  return (
    <header className="bg-white h-52 w-full px-2.5 py-1.5 shadow-2xl sticky top-0 z-50">
      <div>
        <div className="flex flex-row justify-between gap-1.5 items-end">
          <h1 className="text-5xl ">Recipedia</h1>
          <FavouritesButton />
        </div>
        <div className="flex justify-center items-center  mt-14 w-full max-w-4xl mx-auto px-5 min-[500px]:px-10 sm:px-20  relative">
          <input
            type="text"
            className="text-2xl border-2 rounded-md px-2.5 py-1 w-full "
            placeholder="Search Recipies..."
            name="search-recipe"
            id="search-recipe"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchItem(serachValue, e);
              }
              return;
            }}
          ></input>
          <button
            className="absolute min-[500px]:right-10 right-5 sm:right-20 px-2.5 py-1"
            onClick={() => handleSearchItem(serachValue)}
          >
            <SerachIcon className="size-9" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
