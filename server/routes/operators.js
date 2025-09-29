import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import operatorsData from "../data/operators.js";
import OperatorsController from "../controllers/operators.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", OperatorsController.getOperator);

router.get("/:operatorId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/operator.html"));
});

export default router;
