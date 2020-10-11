const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tugasw6",
});

conn.connect();
module.exports = conn;
