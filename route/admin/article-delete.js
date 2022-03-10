const { Article } = require('../../model/article')
module.exports = async (request, response) => {
    const { id } = request.query;
    // 删除商品
    await Article.findOneAndDelete({ _id: id });
    // 重定向回商品页面
    response.redirect('/admin/article');
}