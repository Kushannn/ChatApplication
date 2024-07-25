import express from "express";
import * as dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to home page ");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server started running on port ${PORT} `);
});
