// server setup
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const baseFolder = __dirname;

const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".jsx": "text/javascript",
  ".svg": "image/svg+xml",
};

// send file
const sendFile = (filePath, response) => {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Something went wrong while loading the file.");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(file);
  });
};

http
  .createServer((request, response) => {
    const requestUrl = decodeURIComponent((request.url || "/").split("?")[0]);
    const requestPath =
      requestUrl === "/" ? "index.html" : requestUrl.replace(/^[/\\]+/, "");
    const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = path.join(baseFolder, safePath);

    fs.stat(filePath, (error, stats) => {
      if (!error && stats.isFile()) {
        sendFile(filePath, response);
        return;
      }

      sendFile(path.join(baseFolder, "index.html"), response);
    });
  })
  .listen(port, () => {
    console.log(`Book Explorer is running at http://localhost:${port}`);
  });
