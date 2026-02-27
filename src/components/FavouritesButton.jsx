import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
import HeartSVG from "../assets/svg/heart.svg?react";
import { FavoriteContext } from "../context/FavouriteContext";
export default function FavouritesButton({ isNotFavPage = true }) {
  const navigate = useNavigate();
  const { getFavCount } = useContext(FavoriteContext);
  const count = getFavCount();
  return (
    <button
      onClick={() => isNotFavPage && navigate(ROUTES.favourites)}
      className="group: ring-1  ring-amber-600 flex items-center gap-1
              hover:bg-red-500 text-red-400 hover:text-amber-50 group
              py-1.5 px-2.5 rounded-xl shadow-2xs shadow-amber-600"
    >
      <HeartSVG className="size-5 group-hover:fill-white fill-red-500 rounded relative" />
      {count !== 0 && (
        <div className="absolute top-2  animate-bounce sm:top-2.5 right-0 flex items-center justify-center bg-amber-400 size-6 rounded-full text-black font-extrabold">
          <span className="text-[12px]">{count}</span>
        </div>
      )}
      <span className=" font-semibold text-center">Favourites</span>
    </button>
  );
}
