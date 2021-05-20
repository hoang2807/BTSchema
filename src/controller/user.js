const { User } = require("../model");
const { Post } = require("../model");
const ObjectId = require("mongodb").ObjectID;

exports.getUser = async() => {
    return await User.find();
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

// exports.createUser = async(body) => {
//     try {
//         const result = await User.create({...body });
//         return result;
//     } catch (error) {
//         return console.log(error);
//     }
// };
// exports.findUser = async(body) => {
//     let mess = "Tim thay";
//     const doc = await User.findOne({
//         username: body.username,
//         password: body.password,
//     }).exec();
//     if (doc) return mess;
//     return (mess = "Khong tim thay");
// };
// exports.deleteUser = async(userId) => {
//     const doc = await User.findOneAndDelete({
//         // _id: ObjectId(userId),
//         _id: userId,
//     }).exec();
//     return doc;
// };
// exports.findLimitUser = async() => {
//     return await User.find().limit(3);
// };