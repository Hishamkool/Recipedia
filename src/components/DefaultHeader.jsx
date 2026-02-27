import React from "react";
import { useNavigate } from "react-router-dom";
import FavouritesButton from "./FavouritesButton";

function DefaultHeader({ isNotFavPage = true }) {
  const navigate = useNavigate();
  return (
    <header className="bg-white h-16 sm:h-18  w-full px-2.5 py-1.5 shadow-2xl sticky top-0 z-50">
      <div className="flex items-center flex-row h-14 justify-between">
        <div className="flex items-center">
          <button
            className="px-5 py-1 cursor-pointer rounded border border-gray-300 bg-gray-100 shadow-xl"
            onClick={() => navigate(-1)}
          >
            {" "}
            ← back
          </button>
          <h1 className="text-2xl hidden pl-2.5 sm:inline md:pl-3.5 ">
            {isNotFavPage ? "Details Page" : "Favourites Page"}
          </h1>
        </div>
        <FavouritesButton isNotFavPage={isNotFavPage} />
      </div>
    </header>
  );
}

export default DefaultHeader;
