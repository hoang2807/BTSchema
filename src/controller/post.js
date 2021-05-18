const { Post } = require("../model");

exports.getPost = async() => {
    try {
        return await Post.find();
    } catch (error) {
        return console.log(error);
    }
};
exports.getPostId = async(postId) => {
    try {
        const result = await Post.findById(postId);
        return result;
    } catch (error) {
        return console.log(error);
    }
};
exports.createPost = async(body) => {
    try {
        const result = await Post.create({
            content: body.content,
            title: body.title,
            comment: body.comment,
        });
        return result;
    } catch (error) {
        return console.log(error);
    }
};
exports.putPost = async(postId, body) => {
    const data = body.content;
    Post.findByIdAndUpdate(postId, { content: data }, function(err, docs) {
        if (err) {
            console.log(err);
            return err;
        } else {
            console.log(docs);
            return docs;
        }
    });
};