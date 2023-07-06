import { Document } from "mongoose";

export interface CommentsInterface {
    content: string
}

export interface BlogInterface extends Document {
    title: string,
    description: string,
    comments: CommentsInterface[]
}