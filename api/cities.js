const { getAll, insert } = require("../models/cities");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const cities = await getAll();
    return res.json({ cities });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { city } = req.body;

    if (city == null) {
      return res.status(400);
    }
    const result = await insert(city);
    return res.json({ result });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
