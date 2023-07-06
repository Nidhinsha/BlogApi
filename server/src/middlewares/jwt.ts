import { NextFunction, Request, Response } from "express"
import expressAsyncHandler from "express-async-handler"

const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

export interface CustomRequest extends Request {
    user?: { id: string }
}

const generateJwtToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

const protect = expressAsyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {

            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Add the decoded user information to the request object
            req.user = decoded;
            next()
        } catch (err) {
            res.status(401).send("Invalid Token")

        }
    }
    if (!token) {
        res.status(401).json("token not found")
    }
})

module.exports = { generateJwtToken, protect }