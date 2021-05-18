const route = require("express").Router();

const UserRoute = require("./user");
const PostRoute = require("./post");
route.use(UserRoute);
route.use(PostRoute);
module.exports = route;