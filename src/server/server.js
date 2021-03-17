require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const mysql = require('mysql')
const app = express();
const cors = require('cors')

//app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
})

const users = [{
    name: "Erik Andreas",
    wage: 21
}
]

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.post('/api/users', (req, res) =>{
    const {name, wage} = req.body;
    console.log("Dette er body: " + name)
    users.push({name, wage, id: users.length + 1})
    res.status(201).end();
})

app.get('/api/users', (req, res) =>{
    console.log(users);
    res.json(users);

})

app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")){
        return next();
    }
    res.sendFile( path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(3000, () =>{
    console.log("Started on http://localhost:3000");
});

