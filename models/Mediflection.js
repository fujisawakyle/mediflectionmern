const mongoose = require('mongoose');
const { Schema } = mongoose;

const mediflectionSchema = new Schema({
  date: String,
  time: { type: Number, default: 0 },
  entry: { type: String, default: '' },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('mediflections', mediflectionSchema);
