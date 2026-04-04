const http = require("http")
const url = require("url")

/*
Creating HTTP server
*/
const server = http.createServer((req, res) => {

    console.log("Request received")
    console.log("Method:", req.method)
    console.log("URL:", req.url)


    /*
    Parsing URL and query parameters
    */
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const query = parsedUrl.query


    /*
    ROUTE: HOME PAGE
    */
    if (path === "/" && req.method === "GET") {

        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")

        res.end(`
            <h1>Welcome to Node HTTP Server</h1>
            <p>This is the home page</p>
        `)
    }



    /*
    ROUTE: JSON RESPONSE
    */
    else if (path === "/api/user" && req.method === "GET") {

        const user = {
            name: "Vikash",
            role: "Full Stack Developer"
        }

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        res.end(JSON.stringify(user))
    }



    /*
    ROUTE: 404 NOT FOUND
    */
    else {

        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")

        res.end("404 Page Not Found")
    }

})



/*
Starting server
*/
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})