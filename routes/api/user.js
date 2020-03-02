const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
.route("/users/:id")
  // .get(userController.getUser)
  .post(userController.create)
  .get(userController.findByIdAndUpdate)
  .delete(userController.remove);

module.exports = router;
