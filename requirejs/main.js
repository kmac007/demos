requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery': './lib/jquery-3.2.1.min'
  }
})
// 加载模块入口
requirejs(['app/index'])