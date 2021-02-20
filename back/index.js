const express = require('express')
const app = express()
const mongoose = require('mongoose');
const axios = require('axios');
const User = require("./models/User");
const cors = require("cors");



const port = 3001
const mongoAtlasUri = "mongodb+srv://dbUser:dbPass@clusterrick.n4yyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//MongoDB connection
try {
    mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
        console.log("Connected to DB"));
} catch (error) {
    console.log("Could not connect to DB");
}


//Middleware
app.use(
    cors({
        origin: "http://localhost:3000", 
        credentials: true,
    })
);

//Routes
app.get('/', async (req, res, next) => {
    try {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                console.log('API called')
                console.log(typeof response.data.results)
                res.send(response.data.results)
            })
    } catch (error) {
        console.log(error)
    }

})

app.get('/character/:id', async (req, res, next) => {
    try {
        axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
            .then((response) => {
                res.send(response.data);
            })
    } catch (error) {
        console.log(error)
    }

})






//Create server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})



