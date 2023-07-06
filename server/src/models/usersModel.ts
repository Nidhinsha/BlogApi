import mongoose from "mongoose";
import { UserInterface } from "../interfaces/users";

const UserSchema = new mongoose.Schema<UserInterface>({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const UserModel = mongoose.model('User', UserSchema)