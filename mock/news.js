/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/news',
    response: function (req, res) {
      res.send(
        {
            success: true,
            message: "获取成功",
            code: "",
            data: [
                {   id:1,
                    title:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许？',
                    create_time:'2017-12-18',
                    title_img:'http://inews.gtimg.com/newsapp_ls/0/2581393390_150120/0'
                },
                {   id:2,
                    title:'烟叶税法、船舶吨税法明年施行 这里面有哪些看点',
                    create_time:'2017-12-18',
                    title_img:'http://img1.gtimg.com/ninja/2/2017/12/ninja151441725561143.jpg'
                },
                {   id:3,
                    title:'全国铁路大调图：石济高铁开通 “复兴号”再扩容',
                    create_time:'2017-12-18',
                    title_img:' http://img1.gtimg.com/ninja/2/2017/12/ninja151441715612208.jpg'
                },
                {   id:4,
                    title:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许？',
                    create_time:'2017-12-18',
                    title_img:'http://inews.gtimg.com/newsapp_ls/0/2581393390_150120/0'
                },
                {   id:122,
                    title:'烟叶税法、船舶吨税法明年施行 这里面有哪些看点',
                    create_time:'2017-12-18',
                    title_img:'http://img1.gtimg.com/ninja/2/2017/12/ninja151441725561143.jpg'
                },
                {   id:112,
                    title:'全国铁路大调图：石济高铁开通 “复兴号”再扩容',
                    create_time:'2017-12-18',
                    title_img:' http://img1.gtimg.com/ninja/2/2017/12/ninja151441715612208.jpg'
                },
                {   id:1122,
                    title:'五星酒店频曝卫生状况差 媒体拷问酒店为何默许？',
                    create_time:'2017-12-18',
                    title_img:'http://inews.gtimg.com/newsapp_ls/0/2581393390_150120/0'
                },
                {   id:111,
                    title:'烟叶税法、船舶吨税法明年施行 这里面有哪些看点',
                    create_time:'2017-12-18',
                    title_img:'http://img1.gtimg.com/ninja/2/2017/12/ninja151441725561143.jpg'
                },
                {   id:11,
                    title:'全国铁路大调图：石济高铁开通 “复兴号”再扩容',
                    create_time:'2017-12-18',
                    title_img:' http://img1.gtimg.com/ninja/2/2017/12/ninja151441715612208.jpg'
                }
            ],
            page:{
                page_current:1
            }
        });
    }
  }