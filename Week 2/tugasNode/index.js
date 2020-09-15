var http = require("http");
var server = http.createServer((req, res) => {
  res.end("hallo saya Hanif");
});

server.listen(3000);
console.log("server running on port 3000");

// Make a request for a user with a given ID
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
