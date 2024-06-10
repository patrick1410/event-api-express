import userData from "../../data/users.json" assert { type: "json" };

export const deleteUser = (id) => {
  const index = userData.users.findIndex((user) => user.id === id);

  if (index === -1) {
    return null;
  }

  userData.users.splice(index, 1);
  return id;
};
