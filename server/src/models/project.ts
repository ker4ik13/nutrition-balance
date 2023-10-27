import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    photos: { type: [String], required: true },
    watchCount: Number,
    likes: Number,
    createdTime: String,
    repository: String,
})

export const Project = mongoose.model("Project", projectSchema);