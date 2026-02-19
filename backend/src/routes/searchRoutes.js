import { Router } from "express";
import { searchProduct, searchByImage } from "../controllers/searchController.js";
import { validateSearchText, validateSearchImage } from "../middleware/validationMidleware.js";
import { upload } from "../middleware/upLoaderMiddleware.js";

const router = Router();

// Principal: POST /search  { "query": "iphone 15" }
router.post("/", validateSearchText, searchProduct);

// Imagen: POST /search/image  (form-data: image=<archivo>)
router.post(
  "/image",
  upload.single("image"),
  validateSearchImage,
  searchByImage
);

export default router;
