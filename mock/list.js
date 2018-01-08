/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/api/list/:name',
    response: function (req, res) {
        if (req.params.name == 1) {
            res.send({
                success: true,
                message: "获取成功",
                code: "",
                data: [{
                        id: 1,
                        name: 'MarialLily',
                        sex: 'girl',
                    },
                    {
                        id: 2,
                        name: 'Marial',
                        sex: 'boy',
                    },
                    {
                        id: 4,
                        name: 'Marial',
                        sex: 'girl',
                    },
                    {
                        id: 5,
                        name: 'ddd',
                        sex: 'girl',
                    },
                    {
                        id: 6,
                        name: 'ccc',
                        sex: 'girl',
                    },
                    {
                        id: 7,
                        name: 'bbb',
                        sex: 'girl',
                    },
                    {
                        id: 8,
                        name: 'aaa',
                        sex: 'girl',
                    },
                ],
                page: {
                    page_current: 1,
                    page_size: 10,
                    page_total: 3,
                    total: "26"
                }
            });
        } else {
            res.send({
                success: true,
                message: "获取成功",
                code: "",
                data: [{
                        id: 1,
                        name: 'Lily',
                        sex: 'girl',
                    },
                    {
                        id: 2,
                        name: 'Kangkang',
                        sex: 'boy',
                    },
                    {
                        id: 3,
                        name: 'Marial',
                        sex: 'girl',
                    },
                    {
                        id: 4,
                        name: 'ddd',
                        sex: 'girl',
                    },
                    {
                        id: 5,
                        name: 'ccc',
                        sex: 'girl',
                    },
                    {
                        id: 6,
                        name: 'bbb',
                        sex: 'girl',
                    },
                    {
                        id: 7,
                        name: 'aaa',
                        sex: 'girl',
                    },
                ],
                page: {
                    page_current: req.params.name,
                    page_size: 10,
                    page_total: 3,
                    total: "26"
                }
            })
        }
    }
}