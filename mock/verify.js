/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/verify',
    response: function (req, res) {
      res.send(
      {"success":true,"message":"\u767b\u5f55\u6210\u529f"}
      );
    }
  }