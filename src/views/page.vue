<template>
    <div class="list">
        <table class="table-list">
            <thead>
                <th>序</th>
                <th>名字</th>
                <th>性别</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in items">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                </tr>
            </tbody>
        </table>
        <me-paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
        </me-paging>

    </div>
</template>
<script>
    import MePaging from './../components/Paging'
    export default {
        //显示的声明组件
        components: {
            MePaging
        },
        data() {
            return {
                pageSize: 20, //每页显示20条数据
                currentPage: 1, //当前页码
                count: 0, //总记录数
                items: []
            }
        },
        methods: {
            //获取数据
            getList() {
                var vm = this;
                //模拟
                vm.$http.get('/api/list/' + vm.currentPage)
                    .then(function (res) {
                        console.log(res)
                        vm.items = res.data.data;
                        console.log(res.data.page.total)
                        vm.count = Number(res.data.page.total);
                        vm.currentPage = Number(res.data.page.page_current);
                        vm.pageSize = res.data.page.pageSize;
                    })
            },

            //从page组件传递过来的当前page
            pageChange(page) {
                this.currentPage = page
                this.getList()
            }
        },
        mounted() {
            //请求第一页数据
            this.getList()
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .list {
        .table-list {
            width: 100%;
            border: 1px solid #eff2f7;
            border-top: none;
            font-size: 12px;
        }
        .table-list tbody tr:hover td {
            cursor: pointer;
            background: #e4e4e4;
            border-right: 1px solid #e4e4e4;
        }
        .table-list tr {
            border-bottom: 1px solid #eff2f7;
        }
        .table-list tr.show-view {
            cursor: pointer;
        }
        .table-list tr .load-tips:hover td {
            cursor: default;
            background: #fff;
            border-right: 1px solid #fff;
        }
        .table-list tr .active td {
            background: #e4e4e4;
            border-right: 1px solid #e4e4e4;
        }
        .table-list th {
            background-color: #f5f6fa;
            border-right: 1px solid #e4e4e4;
            height: 39px;
            color: #999;
            padding: 0 15px;
            text-align: left;
        }
        .table-list th:last-child {
            border-right: none;
        }
        .table-list td {
            color: #666;
            height: 40px;
            padding: 0 15px;
            border-right: 1px solid #fff;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }
        .table-list td.ell {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .table-list td a.pr15 {
            padding-right: 15px;
        }
        .table-list td.error {
            color: #f00;
        }
        .table-list td .span-left {
            padding-left: 10px;
        }
        .table-list td:last-child {
            border-right: none;
        }
        .table-list td:first-child {
            white-space: normal;
            -o-text-overflow: clip;
            text-overflow: clip;
        }
    }
</style>