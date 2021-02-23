const express = require('express')
const app = express()
const mongoose = require('mongoose');
const axios = require('axios');
const User = require("./models/User");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");
require("./middleware/passportConf")(passport);


//Consts
const port = 3001
const db = "mongodb://localhost/haufe";


//MongoDB connection
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose Is Connected");
    }
);


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(
    session({
        secret: "rickmorty",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser("rickmorty"));


//Routes
app.get('/char/:id', async (req, res, next) => {
    try {
        axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
            .then((response) => {
                res.send(response.data);
            })
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

app.get("/char", (req, res) => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
        .then((response) => new Promise(resolve => {
            setTimeout(() => {
                res.send(response.data.results);
            }, 2000);
        }))
});

app.get("/fav", (req, res) => {
    res.send(req.user);

});

app.post("/delfav/:id", async (req, res, next) => {
    const theUser = await User.findById(req.body.id);
    await User.findByIdAndUpdate(theUser, { $pull: { favourites: req.body.char + '' } });
});

app.post("/addfav/:id", async (req, res, next) => {
    const theUser = await User.findById(req.body.id);
    await User.findByIdAndUpdate(theUser, { $push: { favourites: req.body.char + '' } });
});

app.get("/user", (req, res) => {
    res.send(req.user);
});


//Create server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})



