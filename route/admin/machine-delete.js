const { Machine } = require('../../model/machine');

module.exports = async (request, response) => {
    const { id } = request.query;
    await Machine.deleteOne({ _id: id });
    response.redirect('/admin/machine');
}