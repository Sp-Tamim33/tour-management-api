const express = require('express')
const app = express()
const port = 3000 || process.env.PORT;
const colors = require('colors');
require('dotenv').config();


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Tour Management API')
})

app.listen(port, () => {
    console.log(`Tour Management API Running on port ${port}`.yellow.bold)
})