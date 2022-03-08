const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');

module.exports = async (request, response) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm({ multiples: true, uploadDir: path.join(__dirname, '../', '../', 'public', 'uploads'), keepExtensions: true });
    // 解析表单
    form.parse(request, async (err, fields, files) => {
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