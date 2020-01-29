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

//получение заметок для конкретного пользователя
router.post("/", jsonParser, function(req, res){
    const user_id = (req.body.user_id ? req.body.user_id : "");
    Note.find({user_id: user_id}, function(err, notes){
        if(err)
            console.log(err);
        else
            res.send(notes);
    });
});

//добавление новой заметки
router.post("/add", jsonParser, function (req, res) {
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
        if(err)
            console.log(err);
        else
          res.send(note);
    });
});

//удаление заметки
router.delete("/:id", function(req, res) {
    const id = req.params.id;

    Note.findByIdAndDelete(id, function(err, note) {
        if(err)
            console.log(err);
        else
          res.send(note);
    });
});

module.exports = router;
