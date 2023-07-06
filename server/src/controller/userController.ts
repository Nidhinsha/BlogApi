import { Request, Response } from "express";
import { UserModel } from "../models/usersModel";
const bcrypt = require("bcrypt")
const jwtFunction = require("../middlewares/jwt")

exports.userSignup = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body;

        const userEmailAlreadyExists = await UserModel.findOne({ email: email });

        if (!userEmailAlreadyExists) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await UserModel.create({
                email,
                username,
                password: hashedPassword,
            });

            res.status(201).json({ message: "user created" });
        } else {
            res.status(400).json({ message: "user with that email already exists" });
        }
    } catch (error) {
        console.error("Error while creating users:", error);
        res.status(500).json({ message: "An error occurred" });
    }
};

exports.userLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        UserModel.findOne({email}).then(async (userData) => {
            if (userData) {
                const checkPassword = await bcrypt.compare(password, userData.password)

                if (checkPassword) {
                    const data = {
                        email: userData.email,
                        username: userData.username,
                        password: userData.password,
                        token: jwtFunction.generateJwtToken(userData._id),
                    }

                    res.status(200).json(data)
                } else {
                    res.status(400).json({ message: 'Incorrect Password' })
                }
            } else {
                res.status(400).json({ message: "User Does Not Exits" })
            }
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Internal server error" })
    }
}