import express from "express";
import formidable from "express-formidable";

const router = express.Router();
import { requireSignIn, canEditDeleteQuestion } from "../middlewares/index";
import {
  createQuestion,
  userQuestions,
  editUserQuestion,
  updatePost,
  deleteQuestion,
  uploadImage,
  likePost,
  unlikePost,
  addAnswer,
  deleteAnswer,
} from "../controllers/question";

router.post("/create-question", requireSignIn, createQuestion);
router.post(
  "/uploadprofileimage",
  requireSignIn,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

router.get("/create-question", requireSignIn, userQuestions);
router.get("/create-question/:_id", requireSignIn, editUserQuestion);
router.put(
  "/update-question/:_id",
  requireSignIn,
  canEditDeleteQuestion,
  updatePost
);

router.delete(
  "/delete-question/:_id",
  requireSignIn,
  canEditDeleteQuestion,
  deleteQuestion
);

router.put("/like-question", requireSignIn, likePost);
router.put("/unlike-question", requireSignIn, unlikePost);

router.put("/add-answer", requireSignIn, addAnswer);
router.put("/delete-answer", requireSignIn, deleteAnswer);

module.exports = router;
