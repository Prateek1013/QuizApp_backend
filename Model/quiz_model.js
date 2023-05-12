const mongoose = require('mongoose');
const schema = mongoose.Schema;

const quizSchema = new schema({
    id:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:Array,
        required:true
    }
  })
  module.exports = mongoose.model('Quiz', quizSchema);