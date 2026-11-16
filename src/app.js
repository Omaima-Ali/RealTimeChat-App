import express from "express";
import cors from "cors";

const app = express();

app.use(cors());          // lets the React app call this API
app.use(express.json());  // lets us read JSON from req.body

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;