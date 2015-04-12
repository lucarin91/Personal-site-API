var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: {type:String, required:true},
  secret: {type:String, required:true}
});

module.exports = mongoose.model('Users', TodoSchema);
