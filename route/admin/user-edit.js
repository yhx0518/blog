module.exports = (request, response) => {
    const {message} = request.query;
    response.render('admin/user-edit', {message});
}