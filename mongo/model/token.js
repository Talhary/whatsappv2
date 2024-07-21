const mongoose = require('mongoose')

const Allowed = new mongoose.Schema({
   
    id:{type:String, required:true},
    token:{type:String,required:true},
    access:{type:String,required:true}
 
},{timestamps:true})
MyModel = mongoose.model('TokenForBlum',Allowed);
module.exports = MyModel