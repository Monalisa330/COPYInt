export const searchService = async (query) => {
  const markets = [
    { store: "Amazon", price: 900 },
    { store: "MercadoLibre", price: 850 },
    { store: "eBay", price: 920 }
  ];

  markets.sort((a, b) => a.price - b.price);

  return {
    inputType: "text",
    product: query,
    bestPrice: markets[0],
    results: markets
  };
};

// Mock para imagen: luego aquí iría IA (OCR/visión) para sacar nombre del producto
export const searchImageService = async (file) => {
  return {
    inputType: "image",
    received: {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    },
    message: "Imagen recibida. Aquí luego se enviará a la IA para extraer el producto."
  };
};
