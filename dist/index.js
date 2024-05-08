"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.default.Blogger.findAll();
    return response.status(200).json({
        success: true,
        data: users
    });
}));
app.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };
    const user = yield models_1.default.Blogger.create(newUser);
    return response.status(201).json({
        success: true,
        data: user
    });
}));
models_1.default.sequelize.authenticate().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Server is running on port " + process.env.SERVER_PORT);
    });
});
