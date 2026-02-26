export const structureIngridients = (meals) => {
  const allIngridients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meals[0][`strIngredient${i}`];
    const measure = meals[0][`strMeasure${i}`];
    if (ingredient !== "") {
      allIngridients.push(`${measure} ${ingredient}`);
    }
  }
  console.log("all ingredients", allIngridients);
  return allIngridients;
};
