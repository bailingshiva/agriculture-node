const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agriculture');

// 连接成功
mongoose.connection.on('connected', function() {
  console.log('连接MongoDb数据库成功');
});

// 连接异常
mongoose.connection.on('error',  function() {
  console.log('连接MongoDb数据库异常');
});

module.exports = mongoose;
