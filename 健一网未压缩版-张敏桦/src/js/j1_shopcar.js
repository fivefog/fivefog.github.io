(function () {
    /*
       需求：购物车实现(面向对象))
           * 点击加减可以修改数量和小计
           * 删除当行
           * 全选不选
           * 全删
           
       接口：
           * 渲染数据接口：订单表(详情页点击购买的时候存的数据)
           * 数量加减
           * 删除当行、删除全部
           * 选做：保存总数量和总价格
   */
    //获取cookie的用户名、商品id、购买数量
    let username = getcookie('username');
    let sid = getcookie('shopid');
    let buynum = getcookie('buynum');
    let kucun = getcookie('kucunCount');
    
    

   //===========面向对象=============
    class Car {
        constructor(id) {
            //构造函数
            this.carBox = $(id);
            this.init();
        }
        init() {
            //查找节点，和绑定事件
            this.creatList();//渲染数据到购物车 1.ajax
            this.addNum();//点击加添加数量
            // this.ajax_use(); //需要使用ajax的地方
            this.cutNum();//点击减少数量
            this.manual();//手动输入修改数量
            // this.removeRow();//删除某行 3.ajax gid
            // this.allCheck();//全选 
            // this.checkRow();//勾选某一行复选框 4.ajax 要不要把总数量和总价存起来？如果多个页面要展示这个数据，就做接口存起来
            // this.allRemove();
        }
        creatList() {
            ajax({
                type:'post',
                url:'../api/shopcar.php',
                data:{
                    sid, //商品id
                    username,//用户名
                    buynum //购买数量
                },
                success: str => {
                    var arr = JSON.parse(str); //将字符串转成数组/对象
                    console.log(arr);
                    creatdata(arr); //数据渲染
                    
                }

            });
            //发送ajax获取数据，渲染到页面
            function creatdata(arr){
                let xiaoji = (buynum * arr[0].price).toFixed(2);//小计
                var carhtml = `<tr class="shop_conwrap" > 
                <td width="40%">
                        <div class="shop_con_box" width="100%" style="border:0" >
                                <ul class="clearfix">
                                    
                                    <li style="text-align: left; border: none;line-height: 90px;">

                                        <input type="checkbox" value="" name="checkGoods" checked="checked" class="checkGoods" >
                                        <input type="hidden"  value="0">

                                    </li>
                                    <li style="text-align: left; border: none;">
                                       <div class="td_img clearfix">
                                            <a target="_blank" href="###" class="clearfix">
                                                <img style="width: 88px; height: 88px;" src="../img/listimg/${arr[0].img_min}" >

                                        </a>
                                       </div>
                                    </li>
                                    <li style="text-align: left; border: none;width: 226px;margin: 10px 5px;">
                                            <div class="process-02">
                                                <a target="_blank" href="https://www.j1.com/product/119682-132487.html">
                                                ${arr[0].txt}      
                                                </a>
                                            <a href="###" class="orange" style="font-weight: bold;"> (活动价${arr[0].price}元)</a>
                                            
                                            <input type="hidden" id="sku132487-0" value="0">
                                        </div>
                                    </li>
                                </ul>
                        </div>
                </td>
                <td width="8%">A520343</td>   
                <td width="8%">${arr[0].good_guige}</td>
                <td width="10%">${arr[0].changjia}</td>
                <td width="8%">
                    <span class="shopcart-tuijian-price02" id="jyj132487-0" style="color: #c40000;">${arr[0].price}.00</span>
                </td>
                <td width="10%">
                        <div class="process-num clearfix">
                                <div class="process-num_01 cutcount">
                                    <a class="shopcart-btn" onclick="">-</a>
                                </div>
                                <input style="width: 30px" name="orderAmount" id="orderAmount132487-0" min-amount="1" max-amount="${arr[0].num}" promote-amount="0.00" type="text" class="process-num_02" value="${buynum}">
                                <div class="process-num_01 addcount">
                                    <a class="shopcart-btn" onclick="">+</a>
                                </div>
                            </div>
                </td>
                <td width="8%">
                    <span id="sum132487-0" class="sum">${xiaoji}</span>
                </td>
                <td> &nbsp; <a href="###" class="delshop">删除</a></td>
            </tr> `;
            let carhtmlAll = $('.shopcar_body').html() + carhtml;
            $('.shopcar_body').html(carhtmlAll);    
            //$('.shopcar_body').html() + $('.shopcar_body').html(carhtml); //这种用法不行？
            // $('.shopcar_body')[0].innerHTML(carhtml);
            }
        }
        // =============del================
        //2.加减和手动输入控制数量的改变
    // var alist = con.querySelectorAll('.list');
    // var aadd = document.querySelectorAll('.add');//加
    // var adecrease = document.querySelectorAll('.decrease'); //减
    // var agoodNum = document.querySelectorAll('.goodNum'); //数量输入框
    // var axiaoji = document.getElementsByClassName('xiaoji');
        // =============del================
        
           
        
        total(now, num, type) {
            // console.log(arr);
            console.log('a'+kucun);
            
            //数量的变化
            // let kuncun = $(now).parent().find('.nownum').data('num');//data-num
            if (num < 1) {
     
                num = 1;
            } else if (num > kucun) {
                num = kucun;
            console.log(num);

                //这里可以给个提示：您输入的值超过了库存量
            }
            //2.ajax 不用type更简单，把页面的num传到数据库，更新数据库
            // $(now).parent().find('.nownum').val(num);
            
            $('#orderAmount132487-0').val(num);
            //小计=数量*单价
            //let price = $(now).parent().prev().text().slice(2);//单价
            let price = $('#jyj132487-0').html(); //单价
            let all = (num * price).toFixed(2);//小计
         
            
            // $(now).parent().next().html('￥ ' + all);
            $('#sum132487-0').html(all);
            this.allNum();
        }
        addNum() {
            //点击加添加数量
            let _this = this;
            this.carBox.on('click', '.addcount', function () {
                let num = $('#orderAmount132487-0').val();
                // let num = $(this).children().val();
                num++;
                _this.total($(this), num, 'add');//修改数量和单价
                
                
            });

        }
        cutNum() {
            let _this = this;
            this.carBox.on('click', '.cutcount', function () {
                let num = $('#orderAmount132487-0').val();                
                num--;
                _this.total($(this), num, 'cut');
            });

        }
        manual() { //手动输入修改数量
            let _this = this;
            this.carBox.on('input', '#orderAmount132487-0', function () {
                let num = $(this).val();
                _this.total($(this), num, 'manual');
            });
        }
        removeRow() {
            let _this = this;
            this.carBox.on('click', '.good_del', function () {
                // console.log($(this));
                let ok = confirm('您确定要删我吗？');
                if (ok) {
                    $(this).parent().remove();
                }
                if ($('#cart .addnum').size() == 0) {
                    //已经没有数据
                    $('#del').css('display', 'none');
                    // $('#del').css({
                    //     'display': 'none'
                    // });
                } else {
                    $('#del').css('display', 'block');
                }
                _this.allNum();
            });

        }
        allCheck() {
            $('#allchecked input').click(function () {
                let isok = $('#allchecked input').prop('checked');
                $('.good_check input').prop('checked', isok);
                this.allNum();
            }.bind(this));
        }
        checkArr() {
            let arr = [];//存放勾选复选框的下标
            $('.good_check input').each(function (index, item) {
                if ($(item).prop('checked')) {
                    //被勾选了
                    arr.push(index);
                }
            });
            return arr;
        }
        allNum() {
            let checkall = this.checkArr();//被勾选的行的下标，存在数组里面
            // console.log(arr);
            //计算总数量和总价格
            let num = 0;//放商品总数量
            let total = 0;//放总价
            checkall.forEach(function (item, index) {
                num += $('#cart .nownum').eq(checkall[index]).val() * 1;//累加
                total += $('#cart .good_total').eq(checkall[index]).text().slice(2) * 1;

            });
            $('#allnum').html(`已选 ${num} 件商品`);
            $('#totalprice').html(`总计（不含运费）：￥ ${total.toFixed(2)}`);
        }
        checkRow() {
            let _this = this;
            this.carBox.on('click', '.good_check input', function () {
                let len = $('.good_check input').length;//本事复选框的个数
                let achecknum = $('.good_check input:checked').length;
                if (len == achecknum) {
                    //已经全选
                    $('#allchecked input').prop('checked', true);
                } else {
                    $('#allchecked input').prop('checked', false);
                }
                _this.allNum();
            });
        }
        allRemove() {
            $('.delshop').click(function () {
                let checkall = this.checkArr().reverse();//被勾选的行的下标，存在数组里面
                let ok = confirm('您确定要删除？');
                if (ok) {
                    checkall.forEach(function (item, index) {
                        $('.shoptable')
                        // $('#cart .goods').eq(checkall[index]).remove();
                    });
                    this.allNum();
                }
            }.bind(this));

        }
    }

    //调用购物车
    new Car('.shoptable');
})();

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
    $('.btn-set').click(function(){
        let username = getcookie('username');
        if(username){
           
            console.log('已登录');
            
        }else{
            location.href = '../html/j1_login.html'; 
        }
    });
});