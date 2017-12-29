/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/list/:name',
    response: function (req, res) {
        if(req.params.name==1){
            res.send(
                {
                    success: true,
                    message: "获取成功",
                    code: "",
                    data: [
                        { 
                            name:'MarialLily',
                            sex:'girl',
                        },
                        { 
                          name:'Marial',
                          sex:'boy',
                       },
                       { 
                          name:'Marial',
                          sex:'girl',
                       },
                       { 
                          name:'ddd',
                          sex:'girl',
                       },
                       { 
                          name:'ccc',
                          sex:'girl',
                       },
                       { 
                          name:'bbb',
                          sex:'girl',
                       },
                       { 
                          name:'aaa',
                          sex:'girl',
                       },
                    ],
                    page:{
                        page_current:1,
                        page_size: 10, 
                        page_total: 3, 
                        total: "26"
                    }
                });
       }else{
            res.send(
              {
                  success: true,
                  message: "获取成功",
                  code: "",
                  data: [
                      { 
                          name:'Lily',
                          sex:'girl',
                      },
                      { 
                        name:'Kangkang',
                        sex:'boy',
                     },
                     { 
                        name:'Marial',
                        sex:'girl',
                     },
                     { 
                        name:'ddd',
                        sex:'girl',
                     },
                     { 
                        name:'ccc',
                        sex:'girl',
                     },
                     { 
                        name:'bbb',
                        sex:'girl',
                     },
                     { 
                        name:'aaa',
                        sex:'girl',
                     },
                  ],
                  page:{
                      page_current:req.params.name,
                      page_size: 10, 
                      page_total: 3, 
                      total: "26"
                  }
              })
          }
    }
  }