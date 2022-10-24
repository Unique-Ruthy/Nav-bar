const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router.get("/:id", (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});

module.exports = router;
