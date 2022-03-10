const mongoose = require('mongoose');
const Joi = require('joi');
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

const validateArticle = article => {
    // 定义对象的验证规则
    const schema = Joi.object({
        title: Joi.string().min(3).max(10).required().error(new Error('商品名称应为3~10个字')),
        price: Joi.number().required().error(new Error('价格非法')),
        count: Joi.number().required().error(new Error('数量值非法')),
    });
    return schema.validateAsync(article);
}


module.exports = {
    Article,
    validateArticle
}