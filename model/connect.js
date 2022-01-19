const mongoose = require ('mongoose');
// 连接数据库
 mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true,useUnifiedTopology: true });
// 连接成功回调
mongoose.connection.on('open', () => {
    console.log('数据库连接成功');
});