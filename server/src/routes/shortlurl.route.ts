import express from "express";
import {
  createUrl,
  getAllUrl,
  getSingleUrl,
  deleteUrl,
} from "../controllers/shortUrl.controller";
const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getSingleUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
