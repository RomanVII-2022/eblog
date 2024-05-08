import express from "express";
import { Request, Response } from "express-serve-static-core";
import db from "./models";
import dotenv from "dotenv";
dotenv.config()

const app = express()
app.use(express.json())

app.get('/', async (request: Request, response: Response) => {
    const users = await db.Blogger.findAll()
    return response.status(200).json({
        success: true,
        data: users
    })
})

app.post('/', async (request: Request, response: Response) => {
    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }
    const user = await db.Blogger.create(newUser)
    return response.status(201).json({
        success: true,
        data: user
    })
})

db.sequelize.authenticate().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Server is running on port " + process.env.SERVER_PORT)
    })
})