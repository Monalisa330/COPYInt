export const validateSearchText = (req, res, next) => {
  const { query } = req.body;
  if (!query || typeof query !== "string" || query.trim() === "") {
    return res.status(400).json({ error: "query requerida en body" });
  }
  next();
};

export const validateSearchImage = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "Imagen requerida (campo: image)" });
  }
  next();
};
