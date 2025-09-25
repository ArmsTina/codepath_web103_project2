import express from "express";
import operatorsRouter from "./routes/operators.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));
app.use("/operators", operatorsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
