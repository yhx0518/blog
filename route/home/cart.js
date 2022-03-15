const { Article } = require('../../model/article');

module.exports = async (request, response) => {

    const { goodId } = request.query;
    const goods = await Article.findOne({ _id: goodId });


    response.render('home/cart', { goods })
}