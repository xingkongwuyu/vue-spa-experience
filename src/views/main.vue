<template>
    <div>
        <header>
            <div class="header">
                <ul>
                    <li>
                        <router-link to="/index/main/course" :class="{'active':$route.matched[2].path=='/index/main/course'}">课程</router-link>
                    </li>
                    <li>
                        <router-link to="/index/main/newsList" :class="{'active':$route.matched[2].path=='/index/main/newsList'||$route.matched[2].path=='/index/main/newsDetail'}">资讯</router-link>
                    </li>
                </ul>
            </div>
        </header>
        <div class="swrapper2">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 1.30666667rem;
        z-index: 99997;
        box-sizing: border-box;
        line-height: 1.30666667rem;
        box-shadow: 0 0 10px 1px rgba(7, 17, 27, .1);
        background-color: #fff;
    }

    header .header {
        height: 100%;
        color: #93999f;
        text-align: center;
        li {
            float: left;
            width: 50%;
            box-sizing: border-box;
            color: inherit;
        }
        .active {
            color: #fc6722
        }
        .back{
           float:left;
           margin-left:.3125rem;
        }
    }

    .swrapper2 {
        height: 100%;
        margin-top: 1.30666667rem;
    }
</style>