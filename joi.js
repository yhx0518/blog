const Joi = require('joi');


// 定义对象的验证规则
const schema = Joi.object({
    username: Joi.string().min(2).max(5).required().error(new Error('用户名没有通过验证')),
    birth: Joi.number().min(1900).max(2022).error(new Error('生日没有通过验证'))
});


async function run() {
    try {
        // 实施验证
        await schema.validateAsync({username: 'ab', birth: 1800});
    } catch (error) {
        console.log(error.message);
        return false
    }
    console.log('验证成功');
}

run();