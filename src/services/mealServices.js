import api from "./api";

export const getAllMeals = async () => {
  const response = await api.get();
  return response.data ? response.data.meals : [];
};

export const searchMeals = async (searchQuerry) => {
  const response = await api.get(`${searchQuerry}`);
  return response.data ? response.data.meals : [];
};
