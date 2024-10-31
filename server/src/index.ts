import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"


const app: Express = express();
const port = process.env.PORT || 3001;

// Debugging log to check if the server starts and the port value
console.log(`Starting server...`);
console.log(`Configured port is: ${port}`);

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://bpmodi66:pRHX7VrqvvHjfWiu@smartfinance.tvdlz.mongodb.net/";

// Debugging log to check MongoDB connection URI
console.log(`Connecting to MongoDB with URI: ${mongoURI}`);

mongoose
  .connect(mongoURI)
  .then(() => console.log("Successfully Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
