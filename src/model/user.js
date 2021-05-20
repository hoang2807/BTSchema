const mongoose = require("mongoose");
const Post = require("./post");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    idPost: [{
        type: Schema.Types.ObjectId,
        ref: "post",
    }, ],
    idComment: {
        type: Schema.Types.ObjectId,
        ref: "comment",
    },
}, { collection: "user" });

const User = mongoose.model("user", UserSchema);

User.prototype.addPost = async function(postId) {
    const post = await Post.findById(postId);

    if (!post) throw Error("Not found post");

    this.post.push(postId);
    await this.save();

    post.user = this._id;
    await post.save();
};
module.exports = User;