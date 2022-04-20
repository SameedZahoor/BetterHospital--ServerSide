const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const mongoose = require('mongoose');
const Appointment = require('../models/appointments');
require('../db/config');


router.route("/addappointment").post(async(req,resp)=>{

    try {

        Appointment.init()
        const setid = new mongoose.Types.ObjectId();
       
        const appointmentdata = new Appointment({
         _id: setid,
         doctorid:req.body.doctorid,
         patientid:req.body.patientid,
         status:"active",
         date:req.body.date,
         starttime:req.body.starttime,
         endtime:req.body.endtime    
        });
        
        let result = await appointmentdata.save(); 
        resp.send(result); 
        console.table(result);

    } catch(err){
        console.warn(err);
    }
})

router.route("/cancelappointment/:id").patch(async(req,resp)=>{
    try {
            const id = req.params.id;
            var updates ={}
            updates["status"]="cancelled"; 
            const options = {new:true};
            let result = await Appointment.findByIdAndUpdate(id,updates,options); 
            if (!result){
                resp.send("Not Found");       
            } else {
                resp.send(result);         
            }
        
    } catch(err){
        console.warn(err);
    }
})

router.route("/searchMyAllAppointments/:Patient_ID").get(function(req,res){
    var regex = new RegExp(req.params.Patient_ID,'i');
    Appointment.find({Patient_ID:regex}).then((result)=>{
        res.status(200).json(result)
        console.log(result)
    })
})

module.exports = router;