const mongoose = require('mongoose');

mongoose.connect(
'mongodb+srv://sameedzahoor:UDH4qhHore2VPMZq@cluster0.sqiv4.mongodb.net/BetterHospital?retryWrites=true&w=majority',
//'mongodb+srv://usamafiaz:usama2001fiaz@cluster0.u1gsm.mongodb.net/Usama?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.warn("Connected established@BetterHospital");
})