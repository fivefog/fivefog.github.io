/*------回到顶部-----*/
window.onscroll = function () {
    //滚动距离
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop >= 300) {
        //当滚动到300px的时候，盒子显示，否则隐藏
        // $('.topback')[0].style.display='block';
        $('.topback').css('height', 37);
    }
    else {
        // $('.topback')[0].style.display='none';
        $('.topback').css('height', '0');
    }

    $('.topback').click(function () {
        //点击快速回到顶部
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
// (function () { //此处自调用为啥报错？
$('.main .nav_show').mouseover(function () {
    $('.main .sidenav').css('display', 'block');

});
$('.main .nav_show').mouseout(function () {
    $('.main .sidenav').css('display', 'none');

});
// })();
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


(function () {
    var jianyi_list = document.getElementById('jianyi_list');
    // var listbox_con = jianyi_list.querySelector('.listbox_con');
    // var list_row = document.createElement('istbox_con')
    //1.渲染到页面
    function init() {
        ajax({
            type: 'get',
            url: '../api/j1_list.php',
            // data:{} //传给后台的参数
            success: str => {
                // console.log(str);
                creat(str);
            }
        });
    }
    init();
    function creat(str) {
        //渲染数据到页面
        let arr = JSON.parse(str); //将字符串转换成数组/对象
        // console.log(arr);
        //每4个商品渲染一行

        cal(arr);

    }
    function cal(arr) {   //重点！！！
        var result = [];
        var num = 4; //一行有4个
        for (var i = 0, j = arr.length; i < j; i += num) {
            result.push(arr.slice(i, i + num));
        }
        console.log(result); //所有行
        for (var k = 0; k < result.length; k++) {
            var html = result[k].map(item => {

                return `    <div class="list_alone" data-id="${item.id}">                       
                            <div class="list_img_box">
                                <span class="hdj">活动价</span>
                                <img src="../img/listimg/${item.img_url}" alt="">
                            </div>
                            <div class="alone_blank"></div>
                            <a href="###" class="list_txt"> ${item.txt}</a>
                            <p class="list_price">￥${item.price}.00</p> 
                            <div class="list_sell">
                                <span>总销量：${item.all_sell}</span>
                                <a href="###">${item.comment}条评论</a>
                            </div>
                            <div class="list_pay">
                                <a href="###" class="list_car">
                                    <i></i>
                                    <cite>加入购物车</cite>
                                </a>
                            </div>
                            <div class="list_look">
                                <a href="###" class="list_detail">查看详情</a>
                            </div>
                        </div>`;
            }).join(''); //将数组拼接成字符串
            // console.log(html);
            $('.listbox_con').append("<div class='list_row'></div>");
            $('.list_row')[k].innerHTML = html; //每一行渲染四条数据

            //点击商品带参数跳转到详情页
            var alist_img_box = $('.listbox_con .list_img_box');
            for(var i = 0;i < alist_img_box.length;i++){
                alist_img_box[i].index = i;
                alist_img_box[i].onclick = function(){
                    // console.log(arr[this.index]);
                    // var str = objToStr(arr[this.index]);
                    // console.log(str);
                    // console.log(arr[this.index].id);
                    //传商品id给详情页
                    window.open('../html/j1_xiangqing.html?sid=' + arr[this.index].id);
                }
            }


        }


    }

})();


