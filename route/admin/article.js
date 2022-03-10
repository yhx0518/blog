const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');
module.exports = async (request, response) => {
    const { page } = request.query
    // 标识 表示当前访问的是商品管理页面
    request.app.locals.currentLink = 'article';
    // 查询所有文章数据
    // {}, { title: 1, kind: 1, price: 1, cover: 1, count: 1 }
    const articles = await pagination(Article).find({}, { title: 1, kind: 1, price: 1, cover: 1, count: 1 }).page(page).size(5).display(3).populate('kind').exec();
    const article1 = JSON.stringify(articles);
    const article2 = JSON.parse(article1)
    // console.log(articles);
    // response.send(articles);


    response.render('admin/article.art', {
        articles: article2
    })
}