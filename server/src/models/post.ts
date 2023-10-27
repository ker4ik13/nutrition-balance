import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  postId: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  watchCount: Number,
  likes: Number,
  createdTime: String,
});

export const Post = mongoose.model("Post", postSchema);