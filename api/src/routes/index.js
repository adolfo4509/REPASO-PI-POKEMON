const { Router } = require("express");
const pokemon = require("./pokemon");
const tipo = require("./tipo");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use("/pokemon", pokemon);
router.use("/tipo", tipo);

module.exports = router;
