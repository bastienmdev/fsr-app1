const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');



const app = express();

app.use(cors()); // allows cors
app.use(express.urlencoded({extended: false})); // Form Data Body Parser Middleware
app.use(express.json()); // Express Body Parser Middleware
app.use(express.text());

app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => res.send("<h1>Hello World!</h1>"));



const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Sever has successfully started on port: ${PORT}`)
});