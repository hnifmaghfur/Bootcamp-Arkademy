const formResponse = require("../helper/FormResponse");
const authModel = require("../model/Auth");

module.exports = {
  register: (req, res) => {
    // console.log(req.body);
    authModel
      .register(req.body)
      .then((data) => {
        formResponse(data, res, 201, "Register Successfully");
      })
      .catch();
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((token) => {
        console.log(`Ini token dari auth ${token}`);
        formResponse(token, res, 201, "Login Successfully");
      })
      .catch((err) => {
        formResponse(err, res, 404, "Username/password is invalid");
      });
  },
};
