import userData from "../../data/users.json" assert { type: "json" };

export const getUserById = (id) => {
  return userData.users.find((user) => user.id === id);
};
