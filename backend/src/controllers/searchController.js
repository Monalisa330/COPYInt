import { searchService } from "../services/searchService.js";

export const searchProduct = async (req, res, next) => {
  try {
    const { q } = req.query;

    const result = await searchService(q);

    res.json(result);
  } catch (error) {
    next(error);
  }
};
