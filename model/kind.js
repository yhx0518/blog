const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

const KindSchema = new mongoose.Schema({
    kindName: {
        type: String,
        unique: true,
        required: true
    }
});

KindSchema.virtual('articles', {
    ref: 'Article',
    localField: '_id',
    foreignField: 'kind',
    justOne: false
})

const Kinds = mongoose.model('Kinds', KindSchema);


/* mongoose.connection.on('open', () => {
    console.log('数据库连接成功');
}); */

module.exports = {
    Kinds
}
