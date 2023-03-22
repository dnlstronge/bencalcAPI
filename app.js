// needs to allow get request (can be public) for UC & PC elements
// should send back complete object of key-value pairs which represent the different elements
// needs hosted somewhere
// needs package.json and dependencies


const express = require("express")
const app = express();
const port = 3000

// data
const { pcElements, ucElements } = require("./Data/data")


app.get("/pcelements", (req, res ) => [
    res.send()
])
app.listen(port)