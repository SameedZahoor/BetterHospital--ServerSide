const mongoose = require('mongoose');

mongoose.connect(
'mongodb+srv://sameedzahoor:UDH4qhHore2VPMZq@cluster0.sqiv4.mongodb.net/BetterHospital?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.warn("Connected established@BetterHospital");
})