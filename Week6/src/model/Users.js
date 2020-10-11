const db = require("../helper/db");
const bcrypt = require("bcrypt");

const userModel = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },
  postUser: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", body, (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(err);
      });
    });
  },
  patchUser: (body, id) => {
    return new Promise((resolve, reject) => {
      const { password } = body;
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        const newBody = { ...body, password: hashedPassword };
        console.log(newBody);
        if (err) {
          reject(err);
        }
        db.query(`UPDATE users SET ? WHERE id = ${id}`, newBody, (err, res) => {
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        });
      });
    });
  },
  deleteUser: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id = ${id}`, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = userModel;
