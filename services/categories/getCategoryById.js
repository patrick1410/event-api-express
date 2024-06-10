import categoryData from "../../data/categories.json" assert { type: "json" };

export const getCategoryById = (id) => {
  return categoryData.categories.find((category) => category.id === id);
};
