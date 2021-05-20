const { Post } = require("../model");

exports.getPost = async({ limit = 5, page = 1, name = "" }) => {
    try {
        const result = await Post.find()
            .limit(Number(limit))
            .skip(Number((page - 1) * limit))
            .populate({
                path: "idComment",
                populate: {
                    path: "idUser",
                },
            });
        // .then((result) => {
        //     console.log(result);
        // });
        console.log(result);
        return result;
    } catch (error) {
        return console.log(error);
    }
};

exports.addCommentPost = async({ postId, CommentId }) => {
    try {
        const post = await Post.findById(postId);

        post.addComment(CommentId);
        return post;
    } catch (error) {
        console.log(error);
    }
};

exports.createPost = async(body) => {
    try {
        const result = await Post.create({...body });
        return result;
    } catch (error) {
        return console.log(error);
    }
};
exports.addPostUser = async({ userId, postId }) => {
    try {
        const user = await User.findById(userId);

        user.addPost(postId);
        return user;
    } catch (error) {
        console.log(error);
    }
};
// exports.getPostId = async(postId) => {
//     try {
//         const result = await Post.findById(postId);
//         return result;
//     } catch (error) {
//         return console.log(error);
//     }
// };

// exports.putPost = async(postId, body) => {
//     const data = body.content;
//     Post.findByIdAndUpdate(postId, { content: data }, function(err, docs) {
//         if (err) {
//             console.log(err);
//             return err;
//         } else {
//             console.log(docs);
//             return docs;
//         }
//     });
// };