
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Function to serve HTML files asynchronously
const servePage = (filePath, statusCode, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            return res.end("<h1>500 - Server Error</h1>");
        }
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.end(data);
    });
};

const server = http.createServer((req, res) => {
    let route = req.url;

    // Routing logic
    if (route === "/" || route === "/home") {
        servePage(path.join(__dirname, "pages", "home.html"), 200, res);
    }
    else if (route === "/about") {
        servePage(path.join(__dirname, "pages", "about.html"), 200, res);
    }
    else if (route === "/contact") {
        servePage(path.join(__dirname, "pages", "contact.html"), 200, res);
    }
    else if (route === "/style.css") {
        // Serving CSS file
        fs.readFile(path.join(__dirname, "public", "style.css"), (err, css) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("CSS File Not Found");
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(css);
        });
    }
    else {
        // 404 route
        servePage(path.join(__dirname, "pages", "404.html"), 404, res);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
