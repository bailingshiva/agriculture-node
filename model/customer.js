const mongoose = require('./db.js');
var customerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
      type: String,
      required: true
  },
  mobile: {
      type: String
  },
  createDate: {
      type: String
  },
});
module.exports = mongoose.model('customer', customerSchema);
