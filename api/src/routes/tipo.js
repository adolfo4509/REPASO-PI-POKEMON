require("dotenv").config();
const Router = require("express");
const { Pokemon, Tipos } = require("../db");
const axios = require("axios");
const { sequelize } = require("sequelize");

const router = Router();

router.get("/all", async (req, res) => {
  const apiUrl = await axios.get(" https://pokeapi.co/api/v2/type");
  const allApi = apiUrl.data.results.map((e) => {
    return {
      name: e.name,
    };
  });
  const db = await Tipos.findAll({});

  if (db.length === 0) {
    await Tipos.bulkCreate(allApi);
    res.json(db);
  } else {
    res.json(db);
  }
});

module.exports = router;
