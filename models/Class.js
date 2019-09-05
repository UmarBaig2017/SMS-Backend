const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Strength:{
        type: Number
    }
    
})

const ClassSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Sections:{
        type:[SectionSchema]
    },
    
  
})



module.exports = mongoose.model('Class', ClassSchema);