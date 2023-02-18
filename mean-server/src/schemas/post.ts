import mongoose from "mongoose";
import { Post } from "src/models/post.model";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, default: "Default Content"}
});

const model = mongoose.model<Post>('Post', postSchema);
export default model;