const mongoose = require('mongoose');
// 创建商品集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 10,
        minlength: 3,
        required: [true, '请填写商品名称']
    },
    kind: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Kinds',
        required: [true, '请传入种类']
    },
    price: {
        type: String,
        required: [true, '请传入价格']
    },
    cover: {
        type: String,
        default: null,
    },
    count: {
        type: Number,
        default: 0
    },
    content: {
        type: String
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article
}