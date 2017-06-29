require.config({
    baseUrl: "/js/",
    urlArgs: 'v=' + (new Date()).getTime(), //清楚缓存
    paths: {
        "loadConfig": "lib/loadConfig",
        "uiLoad": "lib/uiLoad",
        "jquery": "jquery/jquery-3.2.1.min"
    }
});