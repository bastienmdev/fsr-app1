const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const users = require('./model/Users');


const app = express();

/* const corsOptions = {
    origin: 'http://localhost:3000',
    method: ['GET', 'PUT', 'POST'],
    optionsSuccessStatus: 200
} */

// allows cors
app.use(cors());

// Express Body Parser Middleware
app.use(express.json());

// Form Data Body Parser Middleware
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/api/users', (req, res, next) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    // this route specifies a specific user
    const user = users.filter((user) => user.id === parseInt(req.params.id));
    res.json(user);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("POST RECEIVED")
})

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Sever has successfully started on port: ${PORT}`)
});