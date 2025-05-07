import { Router } from "express";
import {
  getAllQuestion,
  getQuestionById,
  questionUpload,
  submitCode,
  getTestcase,
  getUserQuestionStatus
} from "../controllers/code.controller.js";
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.post("/upload", questionUpload);

router.get("/", verifyJWT, getAllQuestion);

router.get("/:id", verifyJWT, getQuestionById);

router.get("/user/solved", verifyJWT, getUserQuestionStatus);

router.get("/testcase/:id", getTestcase)

router.post("/:id/submit", verifyJWT, submitCode);

export default router;
