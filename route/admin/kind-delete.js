const { Kinds } = require('../../model/kind');

module.exports = async (request, response) => {
    const { id } = request.query;
    await Kinds.deleteOne({ _id: id });
    response.redirect('/admin/kind');
}