//var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://mongodb:27017/MDB');
//mongoose.connect('mongodb://localhost:27017/demoDb');


var mongoose    =   require('mongoose');
mongoose.Promise = global.Promise;

;
var userdb = mongoose.createConnection('mongodb://mongo-db:27017/MDB');

var mongoSchema =   userdb.Schema;
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};





module.exports =  userdb.model('userLogin',userSchema);
