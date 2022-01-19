const guard = (request, response, next) => {
    if(request.url !== '/login' && !request.session.username) {
        response.redirect('/admin/login');
    } else {
        next();
    }
}

module.exports = guard;