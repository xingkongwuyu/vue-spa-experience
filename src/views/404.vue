<template>
<div class='not-found'>
<div>404 not Found</div>
<div>
<router-link to="/login" class="orange">去登入</router-link>
</div>
</div>
</template>
<style  lang="scss" rel="stylesheet">
.not-found{
    width:10rem;
    text-align:center;
    padding-top:2.5rem;
    .orange{
        color:#ff5000;
    }
}
</style>