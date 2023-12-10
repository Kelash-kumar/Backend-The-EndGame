const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const connect_url='mongodb+srv://kelashraisal:N6ZzWxxsk09IQLjO@cluster0.cxnieoz.mongodb.net/kelashraisal';
// const connect ='mongodb+srv://kelashraisal:N6ZzWxxsk09IQLjO@cluster0.cxnieoz.mongodb.net/userdb?retryWrites=true&w=majority'
mongoose.connect(connect_url);



const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  secret: String,
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;
