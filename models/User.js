const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//load users into mongoose (2 arguments)
mongoose.model('users', userSchema);
