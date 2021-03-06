const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    content: String,
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
}, { collection: "comment" });

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;