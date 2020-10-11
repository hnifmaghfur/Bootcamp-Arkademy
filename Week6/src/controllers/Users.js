const formResponse = require("../helper/FormResponse");
const userModel = require("../model/Users");

module.exports = {
  getAllUsers: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200, "Success get all data."))
      .catch((err) => formResponse(err, res, 404, "User not found."));
  },
  postUser: (req, res) => {
    const { name, password, email } = req.body;
    if (name && password && email) {
      let body = { name, password, email };
      userModel
        .postUser(body)
        .then((data) => formResponse(data, res, 201, "Success post data."))
        .catch((err) => formResponse(err, res, 401, "Cannot add data"));
    } else {
      formResponse([], res, 401, "Please fill all fields.");
    }
  },
  patchUser: (req, res) => {
    const { id } = req.params;
    userModel
      .patchUser(req.body, id)
      .then((data) => formResponse(data, res, 201, "Success update data."))
      .catch((err) => formResponse(err, res, 401, "Cannot update data"));
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(id);
    userModel
      .deleteUser(id)
      .then((data) => formResponse(data, res, 201, "Success delete data."))
      .catch((err) => formResponse(err, res, 401, "Cannot delete data"));
  },
};
