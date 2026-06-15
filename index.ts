import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    protocol: "MEID",
    status: "active",
    version: "1.0.0"
  });
});

app.listen(3000, () => {
  console.log("MEID Protocol running on port 3000");
});
