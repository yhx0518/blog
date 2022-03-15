const { Sell } = require('../../model/sell');
const pagination = require('mongoose-sex-page');

module.exports = async (request, response) => {

    request.app.locals.currentLink = 'statistics';

    const { page } = request.query;

    const sellings = await pagination(Sell).find({}).page(page).size(5).display(3).exec();

    response.render('admin/statistics', { sellings })
}