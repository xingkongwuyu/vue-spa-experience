/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/newdetail',
    response: function (req, res) {
      res.send(
        {
            success: true,
            message: "获取成功",
            code: "",
            data: {
                    content:'&lt;p&gt;淘宝每天会上新数不清的商品，也会死掉数不清的商品，为了实现“万能的淘宝”这一宏伟目标，淘宝需要不断的补充新鲜的血液进来(新品、新店)。&lt;/p&gt;&lt;p&gt;对于新品破零来讲，有两个因素是非常关键的，/p&gt;&lt;p&gt;这就跟直通车关键词质量得分一个意思，如果你直通车账户的综合质量比较好，那么，关键词就比较容易到10分。从淘宝搜索引擎的角度来看：既然你好，我就多给你一些机会。这个店铺的综合质量得分包括：全店动销率、全店转化率、店铺活跃度等指标。&lt;/p&gt;&lt;p&gt;(3)新品上新比较规律且动销比较好的店铺机会多一些&lt;/p&gt;&lt;p&gt;如果你一直持续上新，并且比较有规律(比如每周三都能上新)，关键是：你的新品动销率一直表现的比较好，那么，你获得机会就要比别人多一些。&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;"',
                    create_time:'2017-12-18'
                }
        });
    }
  }