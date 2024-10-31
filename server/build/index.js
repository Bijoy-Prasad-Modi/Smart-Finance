"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Debugging log to check if the server starts and the port value
console.log(`Starting server...`);
console.log(`Configured port is: ${port}`);
app.use(express_1.default.json());
const mongoURI = "mongodb+srv://bpmodi66:pRHX7VrqvvHjfWiu@smartfinance.tvdlz.mongodb.net/";
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("Successfully Connected to MongoDB!"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
