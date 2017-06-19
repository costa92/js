var jp_config = {
    handlebars: ['/js/handlebarsjs/handlebars-v4.0.10.js'],
    test: ['js/test/test.css', 'js/test/test.js']
};

function jp_config_multi() {
    var args = [].slice.call(arguments);
    var list = [];
    for (var i = 0; i < args.length; i++) {
        var o = args[i];
        if (o instanceof Array) {
            for (var j = 0; j < o.length; j++) {
                list = list.concat(jp_config[o[j]]);
            }
        } else {
            list = list.concat(jp_config[o]);
        }
    }
    return list;
}