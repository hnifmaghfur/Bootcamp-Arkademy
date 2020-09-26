const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./src/db");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello dunia");
});

//get Method
app.get("/users", (req, res) => {
  let { page, limit } = req.query;
  if (!limit) {
    limit = 5;
  } else {
    limit = parseInt(limit);
  }
  if (!page) {
    page = 1;
  } else {
    page = parseInt(page);
  }

  db.query(
    `SELECT * FROM users LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
    (err, result, fields) => {
      if (!err) {
        res.status(200).send({
          success: true,
          massage: "Berhasil di Ambil",
          data: result,
        });
      } else {
        res.status(500).send({
          success: false,
          message: "Failed to fetch User Data.",
          data: [],
        });
      }
    }
  );
});

// app.get("/users", (req, res) => {
//   db.query(`SELECT * FROM users`, (err, result, fields) => {
//     if (!err) {
//       res.status(200).send({
//         success: true,
//         massage: "Berhasil di Ambil",
//         data: result,
//       });
//     } else {
//       res.status(500).send({
//         success: false,
//         message: "Failed to fetch User Data.",
//         data: [],
//       });
//     }
//   });
// });

//post Method
app.post("/users", (req, res) => {
  const {
    name,
    phone,
    email,
    password,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    name &&
    phone &&
    email &&
    password &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    db.query(
      `INSERT INTO users (name, phone, email, password, balance, verified, photo, pin) VALUES ('${name}', '${phone}','${email}','${password}', '${balance}', ${verified}, '${photo}', '${pin}')`,
      (err, result, fields) => {
        if (!err)
          res.status(201).send({
            succes: true,
            message: "Succes created user data",
            data: result,
          });
        else
          res.status(500).send({
            succes: false,
            message: "Failed created user data",
            data: [],
          });
        db.end();
      }
    );
  } else {
    res.status(400).send({
      success: false,
      message: "All field must be filled",
      data: [],
    });
  }
});

//delete method
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM users WHERE id=${id}`, (err, result, fields) => {
    if (!err) {
      res.status(200).send({
        success: true,
        massage: "Success Delete User",
        data: result,
      });
    } else {
      res.status(500).send({
        success: false,
        message: "Failed to fetch User Data.",
        data: [],
      });
    }
  });
});

app.listen(8000, () => {
  console.log("Server running in port 8000");
});
