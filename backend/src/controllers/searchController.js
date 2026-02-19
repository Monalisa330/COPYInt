import { searchService, searchImageService } from "../services/searchService.js";

export const searchProduct = async (req, res, next) => {
  try {
    const { query } = req.body;
    const result = await searchService(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const searchByImage = async (req, res, next) => {
  try {
    // req.file contiene: buffer, mimetype, originalname, etc.
    const result = await searchImageService(req.file);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
