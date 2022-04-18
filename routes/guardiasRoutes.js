import express from "express";
import { crear, obtener } from "../controllers/guardiaController.js";
const router = express.Router();

router.route("/").post(crear).get(obtener);

export default router;
