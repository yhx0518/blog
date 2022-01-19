module.exports = (request, response) => {
    request.session.destroy(function() {
        response.clearCookie('connect.sid');
        response.redirect('/admin/login');
    });
}