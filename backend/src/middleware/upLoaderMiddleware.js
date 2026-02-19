import multer from "multer";

const storage = multer.memoryStorage(); 
// memoryStorage: el archivo queda en RAM como buffer (ideal si luego lo mandas a IA)

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Formato no permitido. Usa JPG, PNG o WEBP."));
    }
    cb(null, true);
  }
});
