This project is a simple web server built using Node.js without using any external frameworks like Express. It demonstrates how a basic backend server works using Node's core modules, specifically http and fs.
The goal of this assignment is to understand how servers handle requests, send responses, manage routing, and serve files such as HTML and CSS.

🧩 How the Server Works (Concept-Level Explanation)
1️⃣ Creating the Server
The server is created using:
const http = require('http');
http.createServer() listens for incoming requests from the browser (client) and responds with data like HTML, CSS, or text.
When someone visits:
http://localhost:3000/home
The browser sends a request and the server sends a response.

2️⃣ Routing System
The server checks the URL path (req.url) to decide which page to serve.
Example logic:
If URL = /home → Serve home.html
If URL = /about → Serve about.html
If URL = /contact → Serve contact.html
If URL doesn’t match → Serve 404.html
This routing is done manually using simple if-else or switch-case conditions.

3️⃣ Serving HTML Files
Each request loads an HTML file using:
fs.readFile()
This allows the server to send complete webpages to the browser.
For example:
home.html contains the Home page UI
about.html contains the About page content
contact.html contains the Contact page UI
All pages use a separate CSS file stored inside the /public folder.

4️⃣ Serving CSS Files
To serve static files like CSS, the server detects when the request URL contains /public and reads the CSS file using fs.
This allows pages to be styled properly.

5️⃣ Custom 404 Page
If a user visits a route that doesn’t exist:
Example:
/xyz
/page-not-found
/random-route
The server automatically loads:
pages/404.html
This ensures proper error handling and a better user experience.

6️⃣ Using Asynchronous Code
All file reading uses asynchronous fs.readFile(), which means:
✔ Server does not freeze
✔ Multiple requests can be handled
✔ Performance is better
This is a core advantage of Node.js’s event-driven, non-blocking architecture.

7️⃣ Project Structure Explanation
server.js  
pages/
    home.html
    about.html
    contact.html
    404.html
public/
    style.css
images/
    screenshots...

server.js
Contains:
Server creation
Routing
File serving
Error handling
pages/
Contains all HTML files that the server serves based on routes.
public/
Contains CSS and other static files.
images/
Contains screenshots used in GitHub README.

8️⃣ Testing
The server is tested by visiting:
/home
/about
/contact
Invalid routes → shows 404 page
Screenshots are added to confirm the output.

9️⃣ Purpose of the Project
This assignment teaches the core fundamentals of backend development:

✓ How servers work
✓ How routing works
✓ How to send HTML/CSS files
✓ How Node.js manages requests
✓ How to handle errors
✓ How to structure a backend project

✔️ Final Summary

This is a fully functional Node.js server built from scratch using only built-in modules. It handles routing, serves multiple HTML pages, includes a custom 404 page, serves CSS files, and demonstrates asynchronous programming. This project shows the core logic behind how modern servers operate before using frameworks.

