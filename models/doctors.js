const mongoose = require('mongoose');
let doctorsSchema = new mongoose.Schema ({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    CNIC:String,
    phone:String,
    age:String,
    gender:String,
    dob:Date
},{
     versionKey: false // You should be aware of the outcome after set to false 
})

module.exports = mongoose.model('doctors',doctorsSchema);