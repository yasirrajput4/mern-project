import express from "express";
import router from "./routers/auth-router.js";

const app = express();
const port = 3000;

app.use("/api/auth", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
