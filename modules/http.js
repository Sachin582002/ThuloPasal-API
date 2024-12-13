// import { createServer } from "http";
// import data from "./data.js";

// const server = createServer((request, response) => {
//   const formattedData = JSON.stringify(data);

//   response.end(formattedData);
// });

// server.listen(5000, () => {
//   console.log("Server running at port 5000...");
// });



// import { createServer } from "http";
// import data from "./data.js";

// const server = createServer((request, response) => {
//   // response.setHeader("Content-Type", "text/plain");
//   // response.statusCode = 404;

//   console.log(request.url);
//   console.log(request.method);

//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify({ message: "Something went wrong" }));
// });

// server.listen(5000, () => {
//   console.log("Server running at port 5000...");
// });




import { createServer } from "http";
import data from "./data.js";

const server = createServer((request, response) => {
  if (request.url == "/") {
    response.end("Home page");
  } else if (request.url == "/about") {
    response.end("about page");
  } else {
    response.writeHead(404);
    response.end("page not found");
  }
});

server.listen(5000, () => {
  console.log("Server running at port 5000...");
});