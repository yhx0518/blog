const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/goods');

const kindSchema = new mongoose.Schema({
    variety: { type: String }
});

// 虚拟字段
kindSchema.virtual('goods', {
    ref: 'Goods', // 关联的表
    localField: '_id', // 内部关联的键
    foreignField: 'variety', // 外部关联的键
    justOne: false // 是否为一个输出
})

const Kinds = mongoose.model('Kinds', kindSchema)

const goodsSchema = new mongoose.Schema({
    name: String,
    specification: String,
    variety: { type: mongoose.SchemaTypes.ObjectId, ref: 'Kinds' }
});

const Goods = mongoose.model('Goods', goodsSchema);

async function main() {
    /* const water = await Goods.findOne({ name: '哇哈哈矿泉水' });
    const Coke = await Goods.findOne({ name: '百事可乐' });
    const kind1 = await Kinds.findOne({ variety: '饮品' });
    water.variety = kind1;
    Coke.variety = kind1;
    water.save();
    Coke.save(); 
    const food = await Goods.findOne({ name: '小当家干脆面' });
    const kind2 = await Kinds.findOne({ variety: '小食品' });
    food.variety = kind2;
    food.save();
    const goods = await Goods.find().populate('variety');
    console.log(goods); */

    const kinds = await Kinds.find().populate('goods');
    console.log(kinds[1]);
}

main();

mongoose.connection.on('open', (err) => {
    if (err) throw err;
    console.log('数据库连接成功');
});