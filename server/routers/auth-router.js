import express from "express";
const router = express.Router();
import { home } from "../controllers/auth-controller.js";

router.route("/").get(home);

export default router;
