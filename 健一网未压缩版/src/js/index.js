
(function () {

    /*-------------header-------*/
    //选项卡(点解唔得？)
    // $('#jianyi .mine_ul_li > a').hover(function () {
    //     console.log($(this).children());
    //     $(this).children('.minexx').css('display','block');
    // });
    /*-------------轮播图1-------*/
    var s1 = new Swiper('.swiper-container', {
        autoplay: { //自动轮播+延时两秒
            delay: 2000,
            // disableOnInteraction: false
            autoplayDisableOnInteraction: false
        },
        loop: true,//无缝回路轮播
        speed: 500,//切换速度
        navigation: {//上下按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true  //为啥不行？
        },
        // cssMode:false,  啥功能？
        pagination: {//焦点跟随
            el: '.swiper-pagination',
            clickable: true,//点击焦点跳到指定图片
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';//生成焦点数字
            }
        },
        mousewheel: false,//滚动滑轮可以切图
        effect: 'fade'
    });

    var oBox = document.getElementById('swiper-container');

    oBox.onmouseover = function () {//鼠标经过停止
        s1.autoplay.stop();
        // console.log(s1.navigation.prevEl);
        // s1.navigation.prevEl.startMove('opacity',0);为啥不行

    }

    oBox.onmouseout = function () {//鼠标经过离开
        s1.autoplay.start();

    }

    /*-------------轮播图2-------*/
   
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 3,
        spaceBetween: 0, //在slide之间设置距离（单位px）
        slidesPerGroup: 3,
        loop: true,
        autoplay:true,
        loopFillGroupWithBlank: false, //在loop模式下，为group填充空白slide
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        },
      });
   /*鼠标移入停止轮播，鼠标离开 继续轮播*/
    var oBox2 = document.getElementById('swiper-container2');
     console.log(oBox2);
      
    oBox2.onmouseover = function () {//鼠标经过停止
		swiper.autoplay.stop();
	}

    oBox2.onmouseout = function () {//鼠标离开就运动        
		swiper.autoplay.start();
	}

       /*
                  写出面向过程  - 改写成面向对象
                        * 变形(面向过程的程序)
                            * 把代码里面，不是赋值的语句都提到初始化函数里面 init()
                            * 尽量不要有函数嵌套
                            * 可以存在全局变量
                        * 改写
                            * 变量改成属性，属性放在构造函数里面
                            * 函数改成方法，放在原型下面
                            * this的指向要明确 
             */

    
   
})();


(function () {

    new Tabmove('sidebar');
    
    
})();
/*--------热门推荐选项卡----------*/
(function () {   
    new Tabxx('remen_xx','remen_a','remen_con','remen_act');
})();

/*--------floor专区选项卡----------*/  
(function () {
    $('.yaopin_tit li').mouseover(function () {
        // $(this).attr('class', 'active').siblings().attr('class', '');
        $(this).addClass("floor_act").siblings().removeClass();
        $('.yaopin_son').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
        
    });

})();
(function () {
    $('.yiliao_tit li').mouseover(function () {
        // $(this).attr('class', 'active').siblings().attr('class', '');
        $(this).addClass("floor_act").siblings().removeClass();
        $('.yiliao_son').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
        
    });

})();
(function () {
    $('.yangsheng_tit li').mouseover(function () {
        // $(this).attr('class', 'active').siblings().attr('class', '');
        $(this).addClass("floor_act").siblings().removeClass();
        $('.yangsheng_son').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
        
    });

})();

(function () {
     /*-------------热门推荐轮播图-------*/
   
     var swiper_remen = new Swiper('.swiper-container3', {
        slidesPerView: 1,
        spaceBetween: 0, //在slide之间设置距离（单位px）
        slidesPerGroup: 2,
        loop: true,
        autoplay:true,
        loopFillGroupWithBlank: false, //在loop模式下，为group填充空白slide
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        },
      });
   /*鼠标移入停止轮播，鼠标离开 继续轮播*/
    var oBox3 = document.getElementById('remen_swiper');
     console.log(oBox3);
      
    oBox3.onmouseover = function () {//鼠标经过停止
		swiper_remen.autoplay.stop();
	}

    oBox3.onmouseout = function () {//鼠标离开就运动        
		swiper_remen.autoplay.start();
	}
})();

/*------回到顶部-----*/

    window.onscroll=function(){
        //滚动距离
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=300){
            //当滚动到300px的时候，盒子显示，否则隐藏
            // $('.topback')[0].style.display='block';
            $('.topback').css('height',37);
        }
        else{
            // $('.topback')[0].style.display='none';
            $('.topback').css('height','0');
        }
        
        $('.topback').click(function(){
            //点击快速回到顶部
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
        });
    }

$(function(){
    

    let usn = getcookie('username');
    if(usn){
        $('.userinf').html('你好，'+usn+'欢迎来到健一网上药店！&nbsp;<a href="###" class="quit">退出</a>&nbsp;');
    }else{
        $('.userinf').html('你好，欢迎来到健一网上药店！[&nbsp;<a href="html/j1_login.html">登录</a>&nbsp;][&nbsp;<a href="html/j1_reg.html">注册</a>&nbsp;]');

        
    }
    $('.quit').click(function(){ //退出登录
        
        removecookie('username');
        location.reload(); //刷新页面
    });
    
});

$(function(){
    $('.sort_list .dd_box dd').click(function(){
        location.href = 'html/j1_list.html';

    });
});
