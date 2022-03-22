// Including the Express Server
const express = require('express');
const app = express();


// Including cors
const cors = require("cors");

// Connecting to the MongoDb Atlas database
require('./db/config');

// Running Server
app.use(express.json());
app.use(cors());

// Importing Models here...
const Doctor = require('./models/doctors');
const { schema } = require('./models/doctors');
const { default: mongoose } = require('mongoose');
const res = require('express/lib/response');

app.post('/adddoctor',async(req,resp)=>{
    
   Doctor.init()
   const setid = new mongoose.Types.ObjectId();
   console.log("setid = " ,setid);

   const doctordata = new Doctor({
    _id: setid,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    CNIC:req.body.CNIC,
    phone:req.body.phone,
    age:req.body.age,
    gender:req.body.gender,
    dob:new Date(parseInt(req.body.dob.year),parseInt(req.body.dob.month),parseInt(req.body.dob.day))     
   });
   
   let result = await doctordata.save(); 
   resp.send(result);
//      resp.send("recieved");
       
})

app.delete('/removedoctor/:id',async(req,resp)=>{
    
    const result = await Doctor.deleteOne({_id:req.params.id});
    console.log("result = ",result);
    resp.send(result);        
            
})



// listening @ 5000 port
app.listen(5000);




