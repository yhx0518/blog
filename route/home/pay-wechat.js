const { Article } = require('../../model/article');
const { Sell } = require('../../model/sell');
const { Machine } = require('../../model/machine');

module.exports = async (request, response) => {

    const { goodsId } = request.query;
    const goods = await Article.findOne({ _id: goodsId });
    const machines = await Machine.findOne();
    const newCount = goods.count - 1;
    await Article.updateOne({ _id: goodsId }, {
        count: newCount
    });

    await Sell.create({
        title: goods.title,
        price: goods.price,
        Selltime: Date.now(),
        machineNumber: machines.number,
        tower: machines.tower
    })

    response.render('home/wechatPay', { goods });
}