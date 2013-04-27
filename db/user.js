var mongoose = require('mongoose'),
    mongooseTypes = require('mongoose-types'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongooseTypes.loadTypes(mongoose);

var UserSchema = new Schema({
  email: mongoose.SchemaTypes.Email,
  name: String,
  mentor: Boolean,
  last_asked: Date,
  created: Date,
  tags: [String]
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');