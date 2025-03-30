import { Router } from "express";
import { dashboardDatas } from "../controllers/dashboard";
import { authorize } from "../middlewares/user";

const router = Router();

router.get("/count", authorize({ isAdmin: true }), dashboardDatas);

export default router;
