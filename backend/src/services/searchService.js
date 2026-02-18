export const searchService = async (query) => {

  // MOCK temporal
  const markets = [
    { store: "Amazon", price: 900 },
    { store: "MercadoLibre", price: 850 },
    { store: "eBay", price: 920 }
  ];

  // ordenar por precio
  markets.sort((a, b) => a.price - b.price);

  return {
    product: query,
    bestPrice: markets[0],
    results: markets
  };
};
