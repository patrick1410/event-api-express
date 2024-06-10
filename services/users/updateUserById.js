import userData from "../../data/users.json" assert { type: "json" };

export const updateUserById = (id, username, password, name, image) => {
  const user = userData.users.find((user) => user.id === id);

  if (!user) {
    throw new Error(`User with id ${id} was not found!`);
  }

  user.username = username ?? user.username;
  user.password = password ?? user.password;
  user.name = name ?? user.name;
  user.image = image ?? user.image;

  return user;
};
