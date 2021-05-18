const { User } = require("../model");
const ObjectId = require("mongodb").ObjectID;

exports.getUser = async() => {
    return await User.find();
};

exports.createUser = async(body) => {
    try {
        const result = await User.create({
            username: body.username,
            password: body.password,
            email: body.email,
            age: body.age,
            school: body.school,
        });
        return result;
    } catch (error) {
        return console.log(error);
    }
};
exports.findUser = async(body) => {
    let mess = "Tim thay";
    const doc = await User.findOne({
        username: body.username,
        password: body.password,
    }).exec();
    if (doc) return mess;
    return (mess = "Khong tim thay");
};
exports.deleteUser = async(userId) => {
    const doc = await User.findOneAndDelete({
        // _id: ObjectId(userId),
        _id: userId,
    }).exec();
    return doc;
};
exports.findLimitUser = async() => {
    return await User.find().limit(3);
};