import express from "express";

import eventsRouter from "./routes/eventsRoute.js";
import usersRouter from "./routes/usersRoute.js";

const app = express();
app.use(express.json());

app.use("/events", eventsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
