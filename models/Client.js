var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: {type:String, unique: true, required:true},
  secret: { type: String, required: true },
  userId: { type: String, required: true }
});

module.exports = mongoose.model('Client', TodoSchema);
