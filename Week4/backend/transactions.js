const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./src/db");

app.use(bodyParser.urlencoded({ extended: false }));

//get Transactions data
app.get("/transactions", (req, res) => {
  let { sentID, receiveID, status } = req.query;

  // console.log(sentID, receiveID, status);
  if (!sentID) {
    res.status(500).send(
      {
        success: false,
        message: "sentID must be filled",
        data: [],
      },
      res.end()
    );
  } else if (!receiveID) {
    res.status(500).send(
      {
        success: false,
        message: "receiveID must be filled",
        data: [],
      },
      res.end()
    );
  } else {
    db.query(
      `SELECT * FROM transactions WHERE sentID=${parseInt(
        sentID
      )} AND receiveID=${parseInt(receiveID)} AND status='${status}'`,
      (err, result, fields) => {
        if (!err) {
          res.status(200).send({
            success: true,
            message: "Success to fetch Data",
            data: result,
          });
        } else {
          res.status(500).send({
            success: false,
            message: "Failed to fetch User Data.",
            data: [],
          });
        }
        // console.log(result);
        // console.log(err);
      }
    );
  }
});

app.post("/transactions", (req, res) => {
  const { sentID, receiveID, amount, notes } = req.body;

  if (sentID && receiveID && amount && notes) {
    db.query(
      `INSERT INTO transactions (sentID, receiveID, amount, notes) VALUES (${parseInt(
        sentID
      )}, ${parseInt(receiveID)}, ${parseInt(amount)}, '${notes}')`,
      (err, result, fields) => {
        if (!err) {
          res.status(200).send({
            success: true,
            message: "Success input transactions Data",
            data: result,
          });
        } else {
          res.status(500).send({
            success: false,
            message: "Failed input transactions Data",
            data: [],
          });
          db.end();
        }
      }
    );
  } else {
    res.status(400).send({
      success: false,
      message: "All field must be filled",
      data: [],
    });
    console.log(sentID, receiveID, amount, notes);
  }
});

app.delete("/transactions/:id", (req, res) => {
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
