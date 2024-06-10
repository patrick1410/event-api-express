import categoryData from "../../data/categories.json" assert { type: "json" };

export const deleteCategory = (id) => {
  const index = categoryData.categories.findIndex(
    (category) => category.id === id
  );

  if (index === -1) {
    return null;
  }

  categoryData.categories.splice(index, 1);
  return id;
};
