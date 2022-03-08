const { Kinds } = require('../../model/kind')

module.exports = async (request, response) => {

    // 标识 表示当前访问的是商品管理页面
    request.app.locals.currentLink = 'article';
    const kinds = await Kinds.find({});
    // console.log(kinds);

    response.render('admin/article-edit.art', { kinds });
}