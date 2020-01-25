const mongoose = require('mongoose')
const express = require("express");
const app = express();
const usersRouter = require('./api/user');
const notesRouter = require('./api/notes');

const connectionString = 'mongodb+srv://masha:12345@cluster0-ouwvb.mongodb.net/test?retryWrites=true&w=majority';

(async () => {
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true, useUnifiedTopology: true
        },
        function(err) {
            if(err) {
                return console.log(err);
            }

            app.use(function(req, res, next) {
                res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
            });

            app.use('/api/users', usersRouter);
            app.use('/api/notes', notesRouter);
            // localhost:8000/api/users
            app.listen(8000);
        }
    );
})()
