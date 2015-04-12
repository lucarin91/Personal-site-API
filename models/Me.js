var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  bio:  {type:String,required:true},
  img:  {type:String,required:true},
  user: {type: Schema.Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model('Me', TodoSchema);
