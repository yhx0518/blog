const { Machine } = require('../../model/machine');

module.exports = async (request, response) => {
    // response.send(request.body);
    const { id } = request.query;
    const { number, tower, state } = request.body;
    await Machine.updateOne({ _id: id }, {
        number,
        tower,
        state
    });
    return response.redirect('/admin/machine');

}