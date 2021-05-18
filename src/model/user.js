// const { Schema, model } = require("mongoose");
// const UserSchema = new Schema({
//     name: String,
//     age: String,
//     // detail: {
//     //     hairColor: String,
//     //     eyeColor: String,
//     // },
//     // money: [Number],
// });

// const User = model("User", UserSchema);
// module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: String,
    school: String,
}, { collection: "user" });

module.exports = mongoose.model("user", UserSchema);