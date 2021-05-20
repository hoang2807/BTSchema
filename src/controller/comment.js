const { Comment } = require("../model");

exports.createComment = async(body) => {
    try {
        const result = await Comment.create({...body });
        return result;
    } catch (error) {
        return console.log(error);
    }
};