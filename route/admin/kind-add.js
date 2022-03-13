const { Kinds } = require('../../model/kind');

module.exports = async (request, response, next) => {

    const { kindName } = request.body;
    const kinds = await Kinds.findOne({ kindName })
    if (kinds) {
        return next(JSON.stringify({ path: '/admin/kind-edit', message: '商品类别已存在' }));
    }

    await Kinds.create({ kindName });
    response.redirect('/admin/kind');


    // response.send('ok'); l
}