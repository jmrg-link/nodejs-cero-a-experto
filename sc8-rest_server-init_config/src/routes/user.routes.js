// users - router
const { Router } = require("express");
const {
  usersGet,
  usersPut,
  usersPatch,
  usersPost,
  usersDelete,
} = require("../controllers");

const router = Router();

//get
router.get("/", usersGet);

//put
router.put("/:id", usersPut);

//patch
router.patch("/", usersPatch);

//post
router.post("/", usersPost);

//delete
router.delete("/", usersDelete);

module.exports = router;
