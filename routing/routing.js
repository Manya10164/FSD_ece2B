import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home page");
    }
    else if (req.url === "/contact") {
        res.end("Contact page");
    }
    else if (req.url === "/projects") {
        res.end("Projects page");
    }
    else {
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running.....");
});