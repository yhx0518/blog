const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article')

module.exports = async (request, response) => {
    // 实例化表单控件
    const form = new formidable.IncomingForm({ multiples: true, uploadDir: path.join(__dirname, '../', '../', 'public', 'uploads'), keepExtensions: true });
    // 获取id
    const { id } = request.query;
    let good = await Article.findOne({ _id: id })
    form.parse(request, async (err, fields, files) => {
        // console.log(files.cover.path.split('public')[1]);
        // response.send(files.cover.filepath.split('public')[1]);
        await Article.updateOne({ _id: id }, {
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