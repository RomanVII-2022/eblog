import express from "express";
import db from "./models";
import dotenv from "dotenv";
dotenv.config()

const app = express()

db.sequelize.authenticate().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Server is running on port " + process.env.SERVER_PORT)
    })
})