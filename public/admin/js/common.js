function serializeToJson(form) {
    // 获取表单中用户输入的内容 返回值是数组 [{name: 'email', value: '用户输入的内容'}]
    let result = {};
    let f = form.serializeArray();
    f.forEach(function(item) {
        result[item.name] = item.value;
    });
    return result;
}