const mongoose = require('mongoose')
const express = require("express");
const jsonParser = express.json();
const router = express.Router();

const userSchema = require('../database/schemas/user.js');
const User = mongoose.model('user', userSchema, 'user');

//middleware
router.use(function timeLog(req, res, next) {
    next();
});

router.get("/", function(req, res){
    User.find({}, function(err, users){
        if(err) {
            return console.log(err);
        }
        //res.send ({method: "GET"})
        res.send(users)
    });
});

router.get("/:id", function(req, res){
    const id = req.params.id;

    User.findOne({_id: id}, function(err, user){
        if(err) {
            return console.log(err);
        }
        res.send(user);
    });
});

router.post("/", jsonParser, function (req, res) {
    if(!req.body) {
        return res.sendStatus(400);
    }

    const userName = req.body.name;
    const user = new User({ name: userName });

    user.save(function(err) {
        if(err) {
            return console.log(err);
        }

        res.send(user);
    });
});

router.delete("/:id", function(req, res) {
    const id = req.params.id;

    User.findByIdAndDelete(id, function(err, user) {
        if(err) {
            return console.log(err);
        }

        res.send(user);
    });
});

router.put("/", jsonParser, function(req, res){
    if(!req.body) {
        return res.sendStatus(400);
    }

    const id = req.body.id;
    const userName = req.body.name;
    const newUser = { name: userName };

    User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});

module.exports = router;
