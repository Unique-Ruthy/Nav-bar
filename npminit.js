const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(logger);

app.get("/", logger, logger, logger, (req, res) => {
  res.render("index", { text: "World" });
});

const userRouter = require("./router/users");

app.use("/users", userRouter);

app.listen(3000);
