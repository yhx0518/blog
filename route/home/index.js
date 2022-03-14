const { Kinds } = require('../../model/kind');
const { Article } = require('../../model/article');

module.exports = async (request, response) => {

    const { kindId } = request.query;

    const kinds = await Kinds.find({}).populate('articles').lean();
    const goods = await Article.find({ kind: kindId })

    // response.send(kinds);   

    response.render('home/index', { kinds, goods });
};