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

app.get("/users", (req, res) => {
  db.query(`SELECT * FROM users`, (err, result, fields) => {
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
  });
});

//post Method
app.post("/users", (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    password,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    firstName &&
    lastName &&
    phone &&
    email &&
    password &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    db.query(
      `INSERT INTO users (firstName, lastName, phone, email, password, balance, verified, photo, pin) VALUES ('${firstName}','${lastName}', '${phone}','${email}','${password}', '${balance}', ${verified}, '${photo}', '${pin}')`,
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

//update method (patch)
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const {
    firstname = "",
    lastname = "",
    phone = "",
    email = "",
    password = "",
    balance = "",
    verified = "",
    photo = "",
    pin = "",
  } = req.body;
  if (
    firstname.trim() ||
    lastname.trim() ||
    phone.trim() ||
    email.trim() ||
    password.trim() ||
    balance.trim() ||
    verified.trim() ||
    photo.trim() ||
    pin.trim()
  ) {
    db.query(`SELECT * FROM users WHERE id=${id}`, (err, result, fields) => {
      if (!err) {
        if (result.length) {
          console.log(req.body);
          const data = Object.entries(req.body).map((item) => {
            return parseInt(item[1]) > 0
              ? `${item[0]} = "${item[1]}"`
              : `${item[0]} = "${item[1]}"`;
          });
          console.log(data);
          let query = `UPDATE users SET ${data} WHERE id=${id}`;
          db.query(query, (err, result, fields) => {
            console.log(result);
            if (result.changedRows) {
              res.status(200).send({
                succes: true,
                message: `User ${id} succesfully updated`,
              });
            } else if (result.affectedRows) {
              res.status(400).send({
                succes: false,
                message: `User ${id} already updated.`,
              });
            } else {
              res.status(400).send({
                succes: false,
                message: `Failed to update.`,
              });
            }
          });
        } else {
          res.status(400).send({
            succes: false,
            message: `Id not found`,
          });
        }
      } else {
        res.status(500).send({
          success: false,
          message: "Failed update user.",
          data: [],
        });
      }
    });
  }
});

//update method (put)
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
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
    let query = `UPDATE users SET
    name = '${name}',
    phone = '${phone}',
    email = '${email}',
    password = '${password}',
    balance = '${balance}',
    verified = ${verified},
    photo = '${photo}',
    pin = '${pin}'
    where id=${id}`;
    db.query(query, (err, result, fields) => {
      if (!err)
        res.status(201).send({
          succes: true,
          message: `Succes update user data ${id}`,
          data: result,
        });
      else
        res.status(500).send({
          succes: false,
          message: "internal server error",
          data: [],
        });
      db.end();
    });
  } else {
    res.status(400).send({
      succes: false,
      message: "all fiends must be filled",
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
