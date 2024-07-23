import express from "express";
import * as dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to home page ");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server started running on port ${PORT} `));
