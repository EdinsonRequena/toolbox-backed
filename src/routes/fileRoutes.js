import { Router } from "express";
import fileController from "../controllers/fileController.js";

const router = Router();

router.get("/files/list", (req, res) => fileController.getFileList(req, res));
router.get("/files/data", (req, res) => fileController.getFileData(req, res));

export default router;
