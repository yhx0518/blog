const { Machine } = require('../../model/machine');
const pagination = require('mongoose-sex-page');

module.exports = async (request, response) => {
    const { page } = request.query;
    // 标识
    request.app.locals.currentLink = 'machine';

    // page 指定当前页
    // size 每页显示的条数
    // display 指定客户端显示的页码数
    // exec 向数据库中发送查询请求
    const machine = await pagination(Machine).find({}).page(page).size(5).display(3).exec();
    // response.send(machine);

    response.render('admin/machine', { machine });
}