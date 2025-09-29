import express from "express";
import "./config/dotenv.js";
import operatorsRouter from "./routes/operators.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));
app.use("/operators", operatorsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
