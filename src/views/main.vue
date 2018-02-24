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
        width: 100%;
        height: 1.30666667rem;
        line-height: 1.30666667rem;
        position: fixed;
        top: 0;
        box-shadow: 0 0 10px 1px rgba(7, 17, 27, .1);
        z-index: 99997;
        box-sizing: border-box;
        background-color: #fff;
    }

    header .header {
        height: 100%;
        color: #93999f;
        text-align: center;
        li {
            width: 50%;
            float: left;
            color: inherit;
            box-sizing: border-box;
        }
        .active {
            color: #fc6722
        }
    }

    .swrapper2 {
        height: 100%;
        margin-top: 1.30666667rem;
    }
</style>