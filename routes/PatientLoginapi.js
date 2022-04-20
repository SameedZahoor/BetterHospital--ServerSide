const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PatientLogin = require('../models/patientLogin');
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();

require('../db/config');
 
router.route("/search/:id").get(function(req,res){
    var regex = new RegExp(req.params.id,'i');
    PatientLogin.find({id:regex}).then((result)=>{
        res.status(200).json(result)
    })
})

module.exports = router;