var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'Users'},
  name: {type:String, required:true},
  items:
    [{
        name: {type:String, required:true},
        point: {type:Number, required:true}
    }]
});

module.exports = mongoose.model('Skills', TodoSchema);
