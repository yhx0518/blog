const { Article } = require('../../model/article');

module.exports = async (request, response) => {

    const { goodId } = request.query;
    const goods = await Article.findOne({ _id: goodId });
    // response.send(goods)


    response.render('home/item', { goods })
}