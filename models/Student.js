const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    fatherName:{
        type:String
    },
    RegNumber:{
        type:String
    },
    address:{
        type:String
    },
    fatherMobile:{
        type:String
    },
    HomeTelliphone:{
        type:String
    },
    class: {
        type: String
    },
    MonthlyFees:{
        type: Number
    }
    
})



module.exports = mongoose.model('Students', StudentSchema);