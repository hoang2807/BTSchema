const route = require("express").Router();

const UserRoute = require("./user");
const PostRoute = require("./post");
//const CommentRoute = require("./comment"); //bo thi chay duoc
route.use(UserRoute);
route.use(PostRoute);
//route.use(CommentRoute); //bo thi chay duoc
module.exports = route;