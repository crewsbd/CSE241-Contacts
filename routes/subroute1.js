const route = require('express').Router();


route.get("/", (request, response) => {
    response.send("Sub Route 1");
})

module.exports = route;