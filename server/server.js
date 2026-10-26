import express from "express";
import router from "./routers/auth-router.js";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
