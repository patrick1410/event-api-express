import express from "express";

import eventsRouter from "./routes/eventsRoute.js";
import usersRouter from "./routes/usersRoute.js";
import categoryRouter from "./routes/categoriesRoute.js";
import loginRouter from "./routes/loginRoute.js";

import { log } from "./middleware/logMiddleware.js";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use(log);

app.use("/events", eventsRouter);
app.use("/users", usersRouter);
app.use("/categories", categoryRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
