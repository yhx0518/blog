module.exports = (request, response) => {

    const { goodsId } = request.query;

    response.render('home/pay', { goodsId })
}