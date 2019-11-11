<template>
    <header><link rel="stylesheet" href="../assets/font/iconfont.css">
       <span href="###" class="pre iconfont icon-zuo"></span>
       <h2>购物车</h2>
       <i class="iconfont icon-sousuo"></i>   
    </header>
</template>

<style scoped lang="scss">
    @function vw($px) {
    @return ($px / 375) * 100vw;
    }
    header{
        position: fixed;
        top: 0;
        display: flex;
        left: 0;
        right: 0;
        height: vw(50);
        background: #F2F2F2;
        h2{
            font-size: vw(16);
            display: inline-block;
            flex: 1;
            text-align: center;
            color: #666;
            font-weight: 500;
            line-height: vw(50);
        }
    }
    .icon-zuo{
        color: #666;
        display: inline-block;
        font-size: vw(28);
        line-height: vw(50);
        margin: 0 vw(10);
    }
    .icon-sousuo{
        font-size: vw(27);
        margin: 0 vw(10);
        line-height: vw(50);
        color: #666;

    }
    /* <span class="iconfont icon-xxx"></span> */
</style>