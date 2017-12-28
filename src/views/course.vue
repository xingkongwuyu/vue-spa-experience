<template>
    <div>
        <div class="course">
            <ul>
                <li v-for="(item,index) in courseList">
                    <div class="course-img">
                        <img :src="item.img" />
                    </div>
                    <div class="course-title">{{item.title}}</div>
                    <div class="course-intro">讲师：
                        <span>{{item.teacher}}</span>
                    </div>
                    <div class="course-teacher">简介：
                        <span>{{item.intro}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                courseList: '',
            }
        },
        mounted() {
            var vm = this;
            var url = '/api/course';
            vm.$http({
                method: "GET",
                url: url
            }).then(function (res) {
                console.log( res.data.data)
                vm.courseList = res.data.data;
            })
        }
    }
</script>
<style lang="scss" rel="stylesheet">
    .course {
        width:10rem;
        padding: .46875rem;
        box-sizing: border-box;
        margin:0 auto;
        li{
        padding-bottom: .5rem;
        .course-img {
            width: 9.0625rem;
            min-height: 5.109375rem;
            background-color: #fff000;
            font-size: 0;
            img {
                width: 100%;
            }
        }
        .course-title {
            padding-top: .3125rem;
            color: #666;
            line-height: 1.5;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }
        .course-intro {
            color: #999;
            padding-top: .15625rem;
            line-height: 1.5;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }
        .course-teacher {
            color: #999;
            line-height: 1.5;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }
        }
    }

    [data-dpr="1"] .course .course-title {
        font-size: 16px;
        line-height: 1.5;
    }

    [data-dpr="2"] .course .course-title {
        font-size: 32px;
    }

    [data-dpr="3"] .course .course-title {
        font-size: 48px;
    }
</style>