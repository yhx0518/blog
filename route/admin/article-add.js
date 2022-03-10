const formidable = require('formidable');
const path = require('path');
const { Article, validateArticle } = require('../../model/article');

module.exports = async (request, response, next) => {

    // 创建表单解析对象
    const form = new formidable.IncomingForm({ multiples: true, uploadDir: path.join(__dirname, '../', '../', 'public', 'uploads'), keepExtensions: true });
    // 解析表单
    form.parse(request, async (err, fields, files) => {
        const { title, price, count } = fields;
        const validateObj = {
            title, price, count
        }
        try {
            // 实施验证
            await validateArticle(validateObj);
        } catch (e) {
            // 验证没有通过
            // e.messages
            // 重定向回商品添加页面
            // return response.redirect(`/admin/article-edit?message=${e.message}`);
            return next(JSON.stringify({ path: '/admin/article-edit', message: e.message }))
        };
        // 根据商品名称查询
        const goods = await Article.findOne({ title });
        // 如果商品存在
        if (goods) {
            // return response.redirect(`/admin/article-edit?message=商品已存在`);
            return next(JSON.stringify({ path: '/admin/article-edit', message: '商品已存在' }))
        }
        // console.log(files.cover.path.split('public')[1]);
        // response.send(files.cover.filepath.split('public')[1]);
        // console.log(fields.kind);
        await Article.create({
            title: fields.title,
            kind: fields.kind,
            price: fields.price,
            cover: files.cover.filepath.split('public')[1],
            count: fields.count,
            content: fields.content
        });
        // 将页面重定向到文章列表页面
        response.redirect('/admin/article');
    })
}