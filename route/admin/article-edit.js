const { Kinds } = require('../../model/kind');
const { Article } = require('../../model/article')

module.exports = async (request, response) => {
    const { id, message } = request.query;
    // 标识 表示当前访问的是商品管理页面
    request.app.locals.currentLink = 'article';
    const kinds = await Kinds.find({});

    // 如果传递了id参数
    if (id) {
        // 修改操作
        const goods = await Article.findOne({ _id: id });
        let link = '/admin/article-modify?id=' + id;
        let button = '修改'
        // response.send(goods);
        response.render('admin/article-edit.art', { kinds, goods, link, button, message });

    } else {
        let link = '/admin/article-add'
        let button = '新增'
        // 添加操作
        response.render('admin/article-edit.art', { kinds, link, button, message });
    }
    // console.log(kinds);

}