import express from "express";
const router = express.Router();
import { requireSignIn } from "../middlewares/index";
import {
  conversation,
  userConversation,
  users,
  twoUserConversation,
} from "../controllers/conversation";

router.get("/users", requireSignIn, users);
router.post("/conversation", requireSignIn, conversation);

router.get("/conversation/:_id", requireSignIn, userConversation);
router.get(
  "/conversation/find/:firstUserId/:secondUserId",
  requireSignIn,
  twoUserConversation
);
module.exports = router;
