import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        mensaje: "Ruta de búsqueda funcionando correctamente"
    });
});


router.get('/buscar', (req, res) => {
    const query = req.query.q;
    res.json({
        resultado: `Buscando resultados para: ${query}`
    });
});


export default router;
