const express = require("express");
const router = express.Router(); // ✅ Define router before using it

const UserController = require("../controllers/UserController");
const bookController = require("../controllers/bookController");

// ✅ Routes
router.post("/user/sign-up", UserController.createUser);
router.get("/user/all-user", UserController.findAllUser);
router.get("/user/get-user/:id", UserController.findUser);
router.put("/user/update-user/:id", UserController.updateUser);
router.delete("/user/delete-user/:id", UserController.deleteUser);
router.post("/user/login", UserController.login);

router.post("/user/create-book", bookController.createBook);
router.get("/user/all-book/:id", bookController.findBookByUser);
router.delete("/user/delete-book/:id", bookController.deleteBookItem);

module.exports = router;

