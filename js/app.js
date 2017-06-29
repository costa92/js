  + function($) {
      require(['jquery', "uiLoad", "loadConfig"], function(math) { // 选择必须加载的文件
          uiLoad.load(aut_config_multi('handlebars', 'test')); // 选择加载的文件
      });
  }(jQuery)