export const validateSearch = (req, res, next) => {
  if (!req.body.query) {
    return res.status(400).json({
      error: "Query requerida"
    });
  }
  next();
};
