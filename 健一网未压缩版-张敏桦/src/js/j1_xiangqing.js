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
// (function () { //此处自调用为啥报错？
    $('.main .nav_show').mouseover(function () {   
        $('.main .sidenav').css('display','block');

    });
    $('.main .nav_show').mouseout(function () {
        $('.main .sidenav').css('display','none');
        
    });
// })();
//渲染数据
$(function(){
    var str = decodeURI(location.search.slice(1));
    //console.log(str);//字符串 sid=5
    var sid_obj = strToObj(str); //参数转成对象
    //console.log(sid_obj);//一条数据 {sid: "5"}
    var sid = sid_obj.sid;
    console.log(sid); //5
    var leixing ='';
    function init(){
        ajax({
            type:'get',
            url:'../api/j1_xiangqing.php',
            data:{
                sid, //商品id
                leixing //商品类型
            },
            success: str => {
                createImg(str); //渲染放大镜
                createInf(str); //渲染商品信息
                infNum(str); //商品数量加减
                toCar(str); //跳转到购物车
            }
        });
    }

    init();

    let box = document.getElementsByClassName("box")[0];
    let smaller = box.getElementsByClassName("smaller")[0];
    let productarea_right = document.getElementsByClassName("productarea_right")[0];
    let pro_r_top = productarea_right.getElementsByClassName('pro_r_top')[0];
    let pro_con = productarea_right.getElementsByClassName('pro_con')[0];

    function createImg(str){ //渲染放大镜部分
        
        // console.log(str);
        let arr = JSON.parse(str); //将字符串转成数组/对象 
        
       // console.log(arr[0].img_small); // 1-1.jpg,1-2.jpg,1-3.jpg,1-4.jpg,1-5.jpg

        // let arrimg = "../img/";
        let small_imgarr = arr[0].img_small.split(',');//将图片路径的字符串切割成数组
        //console.log(small_imgarr); //["3-119682_0_720x720.jpg", "3-119682_1_720x720.jpg"]
        
        let arrs = small_imgarr.map(item => {
            return `../img/listimg/${item}`;
        });
        // console.log(arrs);

        //遍历小图
        //let small_imgarr = arr[0].img_small.split(',');//将图片路径的字符串切割成数组
        let small_imghtml = ''; //拼接小图字符串

        magniglass({
        ele: 'wrap',//最外层盒子的id(必填)
        imglist: arrs,//图片数据(必填)
        //imglist: ["../img/ylbj1.jpg", "../img/ylbj2.jpg", "../img/ylbj3.jpg", "../img/ylbj4.jpg", "../img/ylbj1.jpg", "../img/ylbj1.jpg"],//图片数据(必填)
        scal: 2,//大图放大倍数(选填，默认是2倍)
        speed: 1//小图运动的图片个数(选填，默认是一次动一张图)
    });

    

    }
    function createInf(str){ //渲染商品信息部分
        let arr = JSON.parse(str); //将字符串转成数组/对象
        console.log(arr);
        let inftop = `<h2>${arr[0].txt}</h2>
                     <div class="pro_style">（新老包装替换中，请以收到的为准，谢谢~）</div> `;
        pro_r_top.innerHTML = inftop;
        let infhtml = `<div class="pro_con1">
        <dl class="pro_price clearfix">
            <dt class="fl">价&nbsp;&nbsp;&nbsp;&nbsp;格：</dt>
            <dd class="fl">￥${arr[0].price}</dd>
        </dl>
        <dl class="pro_price clearfix">
                <dt class="fl">促销信息：</dt>
                <dd class="fl clearfix">
                    <sup class="fl">优惠</sup>
                    <sub class="fl">活动价${arr[0].price}元</sub>
                </dd>
        </dl>
        <dl class="pro_price clearfix pro_ph">
                <sub class="fl">手机下单更方便</sub>
        </dl>
        <dl class="clearfix">
                <dt class="fl">商品规格：</dt>
                <dd class="fr">${arr[0].good_guige}</dd>
        </dl>
        <dl class="clearfix">
                <dt class="fl">生产厂家：</dt>
                <dd class="fr">${arr[0].changjia}</dd>
        </dl>
        <dl class="clearfix">
                <dt class="fl">支&nbsp;&nbsp;&nbsp;&nbsp;持：</dt>
                <dd class="fr">
                        在线支付满89元包邮&nbsp;
                    货到付款满150元包邮</dd>
        </dl>
    </div>
    <div class="btddd">
            <div class="newbuywrap">
                    <dl class="xzys clearfix">
                                    <dt>选择规格：</dt>
                                    <dd>
                                        <ul>
                                            <li class="">
                                                    <a href="https://www.j1.com/product/119681-132486.html">
                                                        <img src="https://img01.j1.com/upload/gs/20151008/28014_0_100x100.jpg" alt="" width="25" height="25">
                                                        </a>
                                                    <i>
                                                    </i>
                                                </li>
                                            <li class="">
                                                    <a href="https://www.j1.com/product/119682-132487.html">
                                                        <img src="https://img01.j1.com/upload/gs/20180620/119682_0_100x100.jpg" alt="" width="25" height="25">
                                                            血糖试纸50片</a>
                                                    <i>
                                                    </i>
                                                </li>
                                            <li class="act">
                                                    <a href="https://www.j1.com/product/1179-51560.html">
                                                        <img src="https://img01.j1.com/upload/goods/58-58/1179/1179_0.jpg" alt="" width="25" height="25">
                                                            稳豪倍易型 血糖仪</a>
                                                    <i>
                                                    </i>
                                                </li>
                                            </ul>
                                    </dd>
                                </dl>
                            <input id="TCPattern" type="hidden" value="0">
                        <dl class="clearfix buyNumDL" id="buyNumDL">
                            <dt class="pt5 fl">数量：</dt>
                            <dd class="fl">
                                <input id="goodscount" class="count" value="1" type="text" name="goodscount">
                                <input id="goods_count_value" value="1" type="hidden" name="goods_count_value">
                                <a href="###" class="c02"></a>
                                <a href="###" class="c01"></a>
                                <input type="hidden" value="100" id="buyLimit">
                                <a href="###" rel="nofollow" id="addShopCart" class="c03" onclick=""></a>
                                
                                <!-- <span class="eachpur">每人限购<span id="limitsBuyNum"></span>件<span class="conjtw">◆<em class="conjtn">◆</em></span></span> -->

                                
                            </dd>
                        </dl>
                        <div class="productarea-right-4-btn" id="goodsBtnDiv" style="display: none;"></div>
                    </div>
    </div>`;
    pro_con.innerHTML = infhtml;
    }
    function infNum(str){ //控制数量的加减、手动输入，并把商品id和数量存到cookie
        
        let arr = JSON.parse(str); //将字符串转成数组/对象
        
        changeNum($('#goodscount').val()); //不手动操作时cookie有默认的商品数量
        function changeNum(shopnum){ //参数：当前数量
            let kucun = arr[0].num; //获取数据里的库存量
            if(shopnum >= kucun){ //上限
                shopnum = kucun;
            }
            if(shopnum <= 0){ //下限
                shopnum = 1;
            }
            console.log("库存："+kucun);      
            $('#goodscount').val(shopnum); 
            // setdata(str,$('#goodscount').val());//把商品id和数量存到cookie              
        }
        // function addNum() {
            //点击加添加数量
            $('.pro_con .c02').click(function(){
                let shopnum = $('#goodscount').val(); //获取当前的的数量值
                // var kucun = goodsList[this.index].kucun; //获取假数据里的库存量
                // console.log('库存量'+kucun);          
                shopnum++;
                changeNum(shopnum);
            });
        // } 
        // addNum(); 
        // function cutNum() {
            //点击加删减数量
            $('.pro_con .c01').click(function(){
                let shopnum = $('#goodscount').val(); //获取当前的的数量值
                // var kucun = goodsList[this.index].kucun; //获取假数据里的库存量
                // console.log('库存量'+kucun);          
                shopnum--;
                changeNum(shopnum);
            });
        // } 
        // cutNum();  
         //手动输入,失去焦点时发生
         $('#goodscount').blur(function(){            
            var shopnum = $(this).val();
            console.log(shopnum);
            
            changeNum(shopnum);
        });

        // //把商品id和数量存到cookie
        // function setdata(str,buynum) {
        //     let arr = JSON.parse(str); //将字符串转成数组/对象
        //     setcookie('shopid', arr[0].id, 30);
        //     setcookie('buynum',buynum,30);
        // }
       
        
    }
     //把商品id和数量,以及库存量存到cookie
     function setdata(str,buynum) {
        let arr = JSON.parse(str); //将字符串转成数组/对象
        setcookie('shopid', arr[0].id, 30);
        setcookie('buynum',buynum,30);
        setcookie('kucunCount', arr[0].num, 30);

    }
    function toCar(str){ //加入到购物车
        let arr = JSON.parse(str); //将字符串转成数组/对象 
        // infNum(str);
        $('#addShopCart').click(function(){
            console.log('不操作的商品数'+$('#goodscount').val());
            setdata(str,$('#goodscount').val());//跳转时才把商品id和数量存到cookie              
            console.log('dianme');
            $(this).prop('href','../html/j1_shopcar.html?sid=' + arr[0].id);
            // window.open('../html/j1_shopcar.html?sid=' + arr[0].id);
        });
    }
}); 

/*
//插件版放大镜
$(function() {

	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 338,//承载容器宽
		height : 338,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
    
 }); */

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

