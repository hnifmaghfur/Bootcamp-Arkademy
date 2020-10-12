const db = require("../helper/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      const { password } = body;
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return reject(err);
        }
        const UploadBody = { ...body, password: hashedPassword };
        db.query("INSERT INTO users SET ?", UploadBody, (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            return reject(err);
          }
        });
      });
    });
  },
  login: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      db.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
        let data = [];
        if (result.length > 0) {
          data = result;
        } else {
          data = [
            {
              id: 0,
              name: "kosong",
              email: "kosong",
              createAt: 0,
              password:
                "$2y$10$4W/5o6dcvCIjm9ym/dkXQ.l6C/p8rCh0swxh8NlvwvAWfYG0gLSUO ",
            },
          ];
        }
        const { password: hashedPassword, verified, email, id, name } = data[0];
        bcrypt.compare(password, hashedPassword, (error, result) => {
          if (result) {
            if (verified > 0) {
              const token = jwt.sign(
                { email, id, name },
                process.env.SECRET_KEY,
                { expiresIn: "1800s" }
              );
              resolve(token);
            }
          } else {
            reject(error);
            return;
          }
        });
      });
    });
  },
};

module.exports = authModel;
