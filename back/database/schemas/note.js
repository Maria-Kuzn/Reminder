const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  date:{
    type: Date,
    //type: String,
    required: [true, 'Date is required']
  },
  comment:{
    type: String
  },
  user_id:{
    type: String
  }
})

module.exports = noteSchema
