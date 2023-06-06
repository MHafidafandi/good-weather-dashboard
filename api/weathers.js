const getWeathrByCity = require("../models/weathers");

const router = require("express").Router();

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const weather = await getWeathrByCity(city);
  return res.json(weather.data);
});

module.exports = router;
