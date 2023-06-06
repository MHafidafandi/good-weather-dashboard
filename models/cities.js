const getDB = require("./database.js");

const getAll = async () => {
  try {
    const db = await getDB(process.env);
    return await db.cities.find({});
  } catch (error) {
    console.log(error.message);
  }
};

const insert = async (city_name) => {
  try {
    const db = await getDB(process.env);
    if (!city_name) {
      return 0;
    }
    return await db.cities.insert({ city_name });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, insert };
