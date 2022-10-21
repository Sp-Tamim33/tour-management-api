const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const TourRouter = require('./routers/tour.router')
const app = express()
const port = 3000 || process.env.PORT;
const colors = require('colors');
require('dotenv').config();

//Middlewares
app.use(express.json());
app.use(cors())
main().catch(err => console.log("Error: ", err));



// DataBase Connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DATABASE).then(() => {
        console.log("Database Connection Successful".cyan.bold);
    });

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


app.use('/', TourRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Tour Management API')
})

app.listen(port, () => {
    console.log(`Tour Management API Running on port ${port}`.yellow.bold)
})