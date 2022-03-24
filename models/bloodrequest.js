const mongoose = require('mongoose');
let Blood_Request_Schema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Patient_ID:String,
    Blood_Group:String,
    Quantity_inML:Number,
});
module.exports = mongoose.model('blood_requests',Blood_Request_Schema);

