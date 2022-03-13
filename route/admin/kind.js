const { Kinds } = require('../../model/kind');
const pagination = require('mongoose-sex-page');


module.exports = async (request, response) => {

    const { page } = request.query;

    request.app.locals.currentLink = 'kind';

    const kinds = await pagination(Kinds).find({}).page(page).size(5).display(3).exec();

    response.render('admin/kind', { kinds })
}