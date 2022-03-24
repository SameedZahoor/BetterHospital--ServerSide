// Including the Express Server
const express = require('express');
const app = express();
// Including cors
const cors = require("cors"); 
// Server Usage
app.use(express.json());
app.use(cors());
// Connecting to the MongoDb Atlas database
require('./db/config');

// Importing All Router Api's
var NurseApis = require('./routes/Nurseapi');
var BloodRequestApis = require('./routes/Bloodrequestapi');
var DoctorApis = require('./routes/Doctorapi');


// Routed Api
app.use('/Nurse',NurseApis);
app.use('/Doctor',DoctorApis);
app.use('/Bloodrequest',BloodRequestApis);


// listening @ 5000 port
app.listen(5000);