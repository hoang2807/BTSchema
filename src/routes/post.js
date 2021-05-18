const route = require("express").Router();
const { PostController } = require("../controller");

route.post("/post/create", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await PostController.createPost(body);
    res.json({
        data,
    });
});
route.get("/post/get", async(req, res) => {
    const data = await PostController.getPost();
    res.json({
        data,
    });
});
route.get("/post/get/:id", async(req, res) => {
    const id = req.params.id;
    const data = await PostController.getPostId(id);
    res.json({ data });
});
route.put("/post/put/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const data = await PostController.putPost(id, body);
    res.json({ data });
});
module.exports = route;