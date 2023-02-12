import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, default: "Default Content"}
});

export = mongoose.model('Post', postSchema);