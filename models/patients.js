const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
let PatientSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    CNIC:{type:String,required: true},
    phone:String,
    age:String,
    gender:String,
    dob:Date,
    admit:Boolean
});
module.exports = mongoose.model('patients',PatientSchema);