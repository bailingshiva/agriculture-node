const mongoose = require('./db.js');
var goodsSchema = new mongoose.Schema({
    goodsCode: {
    type: String,
    required: true
  },
    goodsName: {
    type: String,
    required: true
  },
    price: {
    type: Number,
    required: true
  },
    type: {
    type: String,
    required: true
  },
    picUrl: {
    type: String,
    required: true
  },
  desc: String
});
module.exports = mongoose.model('goods', goodsSchema);
