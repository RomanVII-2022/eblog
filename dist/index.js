"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
models_1.default.sequelize.authenticate().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Server is running on port " + process.env.SERVER_PORT);
    });
});
