import express from "express";
const router = express.Router();
import { requireSignIn } from "../middlewares/index";
import {
  register,
  login,
  currentUser,
  resetPassword,
  profile,
  getusers,
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/currentuser", requireSignIn, currentUser);
router.post("/resetpassword", resetPassword);
router.put("/profile", requireSignIn, profile);
router.get("/getusers", requireSignIn, getusers);
module.exports = router;
