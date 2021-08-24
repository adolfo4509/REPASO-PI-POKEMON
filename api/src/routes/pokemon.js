require("dotenv").config();
const Router = require("express");
const { Pokemon, Tipos } = require("../db");
const axios = require("axios");
const sequelize = require("sequelize");

const router = Router();

router.get("/all", async (req, res) => {
  res.send("estoy en Pokemones");
});

module.exports = router;
