const mongoose = require('mongoose')
const express = require("express");
const jsonParser = express.json();
const router = express.Router();

const noteSchema = require('../database/schemas/note.js');
const Note = mongoose.model('note', noteSchema, 'note');

//middleware
router.use(function timeLog(req, res, next) {
    next();
});

router.get("/", function(req, res){
    Note.find({}, function(err, notes){
        if(err) {
            return console.log(err);
        }
        res.send(notes)
    });
});

router.get("/:id", function(req, res){
    const id = req.params.id;

    Note.findOne({_id: id}, function(err, note){
        if(err) {
            return console.log(err);
        }
        res.send(note);
    });
});

router.post("/", jsonParser, function (req, res) {
    if(!req.body) {
        return res.sendStatus(400);
    }

    const noteTitle = req.body.title;
    const noteDate = req.body.date;
    const noteComment = req.body.comment;
    const noteUser_id = req.body.user_id;
    const note = new Note({
      title: noteTitle,
      date: noteDate,
      comment: noteComment,
      user_id: noteUser_id
     });

    note.save(function(err) {
        if(err) {
            return console.log(err);
        }

        res.send(note);
    });
});

router.delete("/:id", function(req, res) {
    const id = req.params.id;

    Note.findByIdAndDelete(id, function(err, note) {
        if(err) {
            return console.log(err);
        }

        res.send(note);
    });
});

router.put("/", jsonParser, function(req, res){
    if(!req.body) {
        return res.sendStatus(400);
    }

    const id = req.body.id;
    const noteTitle = req.body.title;
    const noteDate = req.body.date;
    const noteComment = req.body.comment;
    const noteUser_id = req.body.user_id;
    const newNote = {
      title: noteTitle,
      date: noteDate,
      comment: noteComment,
      user_id: noteUser_id
     };
    Note.findOneAndUpdate({_id: id}, newNote, {new: true}, function(err, note){
        if(err) return console.log(err);
        res.send(note);
    });
});

module.exports = router;
