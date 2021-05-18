const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    content: String,
    title: String,
    comment: String,
}, { collection: "post" });

module.exports = mongoose.model("post", PostSchema);