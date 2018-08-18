const mongoose = require('./db.js');
var Schema = mongoose.Schema
var reserveSchema = new mongoose.Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'customer' },
    goodsId: { type: Schema.Types.ObjectId, ref: 'goods' },
    createDate: {
        type: String
    }
});
module.exports = mongoose.model('reserve', reserveSchema);
