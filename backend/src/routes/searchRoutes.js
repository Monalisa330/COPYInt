import { Router } from "express";
import { searchProduct } from "../controllers/searchController.js";

const router = Router();

router.get("/", searchProduct);

export default router;
