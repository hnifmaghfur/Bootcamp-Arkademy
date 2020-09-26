let dataFetch = () => {
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data.map((s) => console.log(s.name)));
};
dataFetch();
