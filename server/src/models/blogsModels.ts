import mongoose from "mongoose";
import { BlogInterface } from "../interfaces/blogs";

const BlogSchema = new mongoose.Schema<BlogInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: [],
        required: false
    }
})

export const BlogModel = mongoose.model('Blog', BlogSchema)