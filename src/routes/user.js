const route = require("express").Router();
const { UserController } = require("../controller");
const alert = require("alert");
route.get("/user/get", async(req, res) => {
    const data = await UserController.getUser();
    res.json({
        data,
    });
});
route.put("/:userId/:postId", async(req, res) => {
    const data = await UserController.addPostUser(req.params);

    return res.json({ data });
});
// route.post("/user", async(req, res) => {
//     const body = req.body;
//     console.log(body);
//     const data = await UserController.createUser(body);
//     console.log(data);
//     res.json({
//         data,
//     });
// });
// route.post("/user/find", async(req, res) => {
//     const body = req.body;
//     console.log(body);
//     const data = await UserController.findUser(body);
//     console.log(data);
//     alert(data);
//     res.json({
//         data,
//     });
// });
// route.delete("/user/delete/:id", async(req, res) => {
//     const id = req.params.id;
//     const data = await UserController.deleteUser(id);
//     res.json({
//         data,
//     });
// });
// route.get("/user/getlimit", async(req, res) => {
//     const data = await UserController.findLimitUser();
//     res.json({
//         data,
//     });
// });
// route.put("/:userId/:postId", async(req, res) => {
//     const data = await UserController.addPostToUser(req.params);
//     return res.json({ data });
// });
module.exports = route;