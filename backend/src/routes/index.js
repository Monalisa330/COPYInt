import { Router } from "express";
import searchRoutes from "./searchRoutes.js";

const router = Router();

router.use("/search", searchRoutes);

export default router;
