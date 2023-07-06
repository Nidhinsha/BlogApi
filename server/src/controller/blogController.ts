
import { Request, Response } from "express";
import { CustomRequest } from "../middlewares/jwt";
import { BlogModel } from "../models/blogsModels";


interface CommentInterface {
    user: string;
    content: string;
}

exports.blogCreate = async (req: Request, res: Response) => {
    try {
        const { title, description, comments } = req.body

        const blog = await BlogModel.create({
            title,
            description,
            comments
        })

        res.status(201).json(blog)
    } catch (error) {
        console.log(error);

        res.status(500).json(error)
    }
}

exports.blogUpdateById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id.replace(":", "");
        const { title, description, comments } = req.body

        const blog = await BlogModel.findByIdAndUpdate(id, {
            title,
            description,
            comments
        })

        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: "An error occurred" })
    }
}

exports.blogFetchAll = async (req: Request, res: Response) => {
    try {
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({ message: 'error in the fetching' })
    }
}

exports.addComment = async (req: CustomRequest, res: Response) => {
    try {
        const id = req.params.id.replace(":", "");
        const { content } = req.body

        const blog = await BlogModel.findById(id)

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const userId = req.user?.id

        const newComment: CommentInterface = {
            user: userId,
            content
        };
        blog.comments.push(newComment);

        await blog.save();

        res.status(200).json(blog);

    } catch (error) {

        console.log(error);
        res.status(400).json(error)

    }
}

exports.blogById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id.replace(":", "");
        const blog = await BlogModel.findById(id)
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

exports.blogDeleteById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id.replace(":", "");
        await BlogModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'blog deleted' })
    } catch (error) {
        res.status(400).json({ message: 'error in the fetching' })
    }
}