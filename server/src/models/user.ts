import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const userSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    login: { type: String, required: true },
    password: { type: String, required: true },
    accountType: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: String,
    nickname: String,
    email: String,
    photo: String,
    createdTime: String,
})

export const User = mongoose.model("User", userSchema);