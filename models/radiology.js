const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
let RadiologySchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    patientid:String,
    doctorid: String ,
    charges:String,
    radiology_type:String
});  
module.exports = mongoose.model('radiology',RadiologySchema);