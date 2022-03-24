const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blood_Request = require('../models/bloodrequest');
var bodyparser = require('body-parser');
const { route } = require('./Nurseapi');
var jsonparser = bodyparser.json();

require('../db/config');



router.route('/addBloodRequest').post(jsonparser,function(req,res){
    const Blood_Request_Data = new Blood_Request({
    _id: new mongoose.Types.ObjectId(),
     Patient_ID:req.body.Patient_ID,
     Blood_Group:req.body.Blood_Group,
     Quantity_inML:req.body.Quantity_inML
    })
    
    Blood_Request_Data.save().then((result)=>{
             console.warn(result)
    })
 })
 
router.route('/removeBloodRequest/:id').delete(function(req,res){
    
    Blood_Request.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{console.warn(err)})
        
})

router.route("/search/:Blood_Group").get(function(req,res){
    var regex = new RegExp(req.params.Blood_Group,'i');
    Blood_Request.find({Blood_Group:regex}).then((result)=>{
        res.status(200).json(result)
    })
})


module.exports= router;