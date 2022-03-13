const { Kinds } = require('../../model/kind');

module.exports = async (request, resoponse) => {

    request.app.locals.currentLink = 'kind';
    const { kindName } = request.body;
    const { id } = request.query;

    await Kinds.updateOne({ _id: id }, {
        kindName
    })

    resoponse.redirect('/admin/kind');
}