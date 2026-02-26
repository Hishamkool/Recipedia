import api from "./api";

export const getAllMeals = async () => {
  const response = await api.get("/search.php", {
    params: { s: "" },
  });
  return response.data ? response.data.meals : [];
};

export const searchMeals = async (searchQuerry) => {
  const response = await api.get(`/search.php`, {
    params: {
      s: searchQuerry,
    },
  });
  return response.data ? response.data.meals : [];
};

export const fetchMealID = async (mealID) => {
  const response = await api.get("/lookup.php", {
    params: {
      i: mealID,
    },
  });
  return response.data ? response.data.meals : [];
};
