const express = require("express");
const router = express.Router();

const validateUser = require("./../../middleware/users");
const validateToken = require("./../../middleware/token");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createSession,
} = require("../../controllers/UserController");

router.get("/", validateToken, getUsers);
router.get("/:id", validateToken, getUser);
router.post("/", validateUser, validateToken, createUser);
router.patch("/:id", validateToken, updateUser);
router.delete("/:id", validateToken, deleteUser);
router.post("/session", createSession);

module.exports = router;
