const router = require("express").Router();
const {
  getUser,
  createUser,
  loginUser,
} = require("../controllers/userController");

const { authMiddleware } = require("../utils/auth");

router.route("/").post(createUser);
router.route("/login").post(loginUser);
router.route("/me").get(authMiddleware, getUser);


module.exports = router;