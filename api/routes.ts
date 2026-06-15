import express from "express";
import { getAllAgents } from "../identity/registry";

const router = express.Router();

router.get("/agents", (_, res) => {
  res.json(getAllAgents());
});

router.get("/status", (_, res) => {
  res.json({
    status: "online"
  });
});

export default router;
