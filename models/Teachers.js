const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String
    },
    fatherName:{
        type:String
    },
    address:{
        type:String
    },
    mobileNumber:{
        type:String
    },
    HomeTelliphone:{
        type:String
    },
    ClassTeacher: {
        type: Boolean,
        default: false
    },
    CNIC:{
        type: String
    },
    Subject:{
        type: String
    },
    Salry:{
        type: Number
    }
    
})



module.exports = mongoose.model('Teachers', TeacherSchema);