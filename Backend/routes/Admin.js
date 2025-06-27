const express = require("express");
const AdminRouter = express.Router();
const { addPost, getData } = require("../controller/adminOp")
const upload = require("../middleware/multerConfig")

AdminRouter.post("/add-post", upload.single("image"), addPost);
AdminRouter.get("/get-post", getData);

module.exports = AdminRouter;

