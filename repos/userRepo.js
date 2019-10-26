const pool = require('../db');

const findAll = async () => {
  const results = await pool.query('SELECT * FROM `xz_user`');
  return results;
};

const findById = async id => {
  const [rows] = await pool.query(
    'SELECT * FROM `xz_user` WHERE `uid`=?',
    [id],
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );
  return rows;
};

const createUser = async user => {
  const [rows] = await pool.query(
    'INSERT INTO `xz_user` SET ?',
    [user],
    (err, result) => {
      if (err) console.log('err', err);
      if (result.affectedRows > 0) {
        return result;
      }
    }
  );
  console.log('new user', rows.insertId);
  const newUser = findById(rows.insertId);
  console.log('new user 02', newUser, typeof newUser);
  return newUser;
};

const update = async (id, user) => {
  const updatedUser = await pool.query(
    'UPDATE `xz_user` SET ? WHERE uid=?',
    [user, id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0) {
        return result;
      }
    }
  );
  console.log('update', user)
  return updatedUser;
};

const del = async id => {
  const result = await pool.query('DELETE from `xz_user` WHERE uid=?', [id]);
  return result;
};

module.exports = {
  findAll,
  findById,
  createUser,
  update,
  del
};
