// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var fs = require('fs')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

// 输出文件的目标文件夹

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
// 递归删除旧的目标文件夹
rm('-rf', assetsPath)

// 重新创建文件夹
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {

  var jspDocType = '<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>';
  var jspContent = jspDocType + fs.readFileSync(config.build.index);
  fs.writeFileSync(path.resolve(config.build.assetsRoot, 'index.jsp'), jspContent);

  spinner.stop()
  if (err) throw err
    // 没有出错则输出相关信息
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
});

