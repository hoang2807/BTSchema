const route = require("express").Router();
const { CommentController } = require("../controller");

route.post("/", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await CommentController.createPost(body);
    res.json({
        data,
    });
});

module.exports = route;