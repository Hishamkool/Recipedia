import React from "react";
import { useNavigate } from "react-router-dom";
import FavouritesButton from "./FavouritesButton";

function DefaultHeader() {
  const navigate = useNavigate();
  return (
    <header className="bg-white h-16 sm:h-18  w-full px-2.5 py-1.5 shadow-2xl sticky top-0 z-50">
      <div className="flex items-center flex-row h-14 justify-between">
        <button
          className="px-5 py-1 rounded border border-gray-300 bg-gray-100 shadow-xl"
          onClick={() => navigate(-1)}
        >
          {" "}
          ← back
        </button>
        <FavouritesButton />
      </div>
    </header>
  );
}

export default DefaultHeader;
