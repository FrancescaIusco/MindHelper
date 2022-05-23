import express from "express";
const router = express.Router();
import { requireSignIn } from "../middlewares/index";
import { message, convMessages } from "../controllers/message";

router.post("/messages", requireSignIn, message);
router.get("/messages/:conversationId", requireSignIn, convMessages);
module.exports = router;
