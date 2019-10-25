const pool = require("../db");

const findAll = async () => {
  const results = await pool.query('SELECT * FROM `xz_user`');
  return results;
};

module.exports = {
  findAll
};
