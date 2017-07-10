# 使用webpack

可以通过 npm init 来创建一个package.json

```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.1.0"
  },
  "dependencies": {
    "jquery": "^3.2.1"
  }
}

```

# 配置webpack.config.js

```
var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './main.js', //入口
  output: {  //出口
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') //输出到dist文件夹，文件名为bundle.js
  },
  plugins: [ //插件
    new webpack.optimize.UglifyJsPlugin(),
  ]
  //还有等等配置
}
```

通过命令行webpack即可开始使用webpack