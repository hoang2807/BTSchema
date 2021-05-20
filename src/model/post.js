const mongoose = require("mongoose");
const Comment = require("./comment");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    content: String,
    author: String,
    idComment: [{
        type: Schema.Types.ObjectId,
        ref: "comment",
    }, ],
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
}, { collection: "post" });

const Post = mongoose.model("post", PostSchema);

Post.prototype.addComment = async function(commentId) {
    const comment = await Comment.findById(commentId);
    if (!comment) throw Error("Not found comment");

    this.comment.push(commentId);
    await this.save();

    this.comment = this._id;
    await comment.save();
};
module.exports = Post;