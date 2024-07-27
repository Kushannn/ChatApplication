import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.send("Welcome to home page ");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started running on port ${PORT} `);
});
