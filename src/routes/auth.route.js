import {Router} from "express";
import { Login, Logout } from "../controllers/auth.controller.js";

const router = Router();

router.get("/login", Login);

router.get("/logout", Logout);

export default router;
