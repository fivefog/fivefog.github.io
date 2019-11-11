$(function(){
    var isok = false; //没用
    //失去焦点时判断输入框
    $('#mobile').blur(function(){
        let phone =$.trim($('#mobile').val()) ;
    
        if(phone){ //不为空
            if(checkReg.tel(phone)){ //正则
                $('.sjsure').html('');
                isok = true;
            }else{
                $('.sjsure').html('<em class="ico"></em> 手机号格式错误！');
                isok = false;
            }
        }else { //为空
                $('.sjsure').html('<em class="ico"></em>手机号不能为空！ ');
                isok = false;
        }
    });
    $('.passwordpre').blur(function(){
        
        let psw =$.trim($('.jsszmm').val()) ;
    
        if(psw){ //不为空
            if(checkReg.psweasy(psw)){ //正则 6-18位首字母开头(错误的写法，有空记得修改！！！)
                $('.pswone').html('');
                isok = true;
            }else{
                $('.pswone').html('<em class="ico"></em> 密码格式错误！');
                isok = false;
            }
        }else { //为空
                $('.pswone').html('<em class="ico"></em>密码不能为空！ ');
                isok = false;
        }
    });
    
    $('.passwordnext').blur(function(){
        
        let pswaga =$.trim($('.jsszmm').val()) ;
    
        if(pswaga){ //不为空
            if(checkReg.pwwagain($.trim($('.jsszmm').val()),pswaga)){ //正则 6-18位首字母开头(错误的写法，有空记得修改！！！)
                $('.pswtwo').html('');
                isok = true;
            }else{
                $('.pswtwo').html('<em class="ico"></em> 两次密码输入不一致，请重新输入！');
                isok = false;
            }
        }else { //为空
                $('.pswtwo').html('<em class="ico"></em>确认密码不能为空！ ');
                isok = false;
            }
    });
    // $('.yanzh').blur(function(){
        
    //     let yzm =$.trim($('.yanzh').val()) ;
    
    //     if(yzm){ //不为空
    //         if(checkReg.pwwagain($.trim($('.jsszmm').val()),pswaga)){ //正则 6-18位首字母开头(错误的写法，有空记得修改！！！)
    //             $('.yzmsure').html('');
    //         }else{
    //             $('.yzmsure').html('<em class="ico"></em> 两次密码输入不一致，请重新输入！');
    //         }
    //     }else { //为空
    //             $('.yzmsure').html('<em class="ico"></em>确认密码不能为空！ ');
    //     }
    // });

    //验证码
    $(function(){
    

        var ma = document.getElementById("ma");  
        //生成验证码
        function yanzhengma(n) {
            var html = "";
            for (var i = 0; i < n; i++) {//遍历需要生成几位的验证码
                var str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
                html += "<span>" + str[parseInt(Math.random() * str.length)] + "</span>";
            }
    
            return html;
        }
        //遍历验证码有几位
        function sty() {
            var _span = ma.getElementsByTagName("span");
    
            for (var i = 0; i < _span.length; i++) {  //验证码的每一位 
                //验证码每一位随机倾斜
                var ii = ['italic', 'normal'];
                var _ii = ii[(Math.round(Math.random()))]; //对[0,1)的随机数进行四舍五入
                //验证码每一位随机字体大小 [16,32)px
                var fw = parseInt(Math.random() * 16 + 16);   //16-30px   --->[0,1) --> *16 [0,16] --> +16 [16,32)  
    
                //验证码每一位随机颜色
                var _color = '#'; //注意位置
                for (var j = 0; j < 6; j++) {  //一位验证码有6个颜色值           
                    var colors = "123456789abcdef";
                    var onecol = colors[parseInt(Math.random() * colors.length)];
                    _color += onecol;
                }
    
                _span[i].style.color = _color;
                _span[i].style.fontStyle = _ii;
                _span[i].style.fontSize = fw + 'px';
    
            }
        }
        //1.刷新页面首先生成一个四位数的、带颜色的验证码
        ma.innerHTML = yanzhengma(4);
        // bg();
        sty();
        //2.点击按钮生成一个验证码
        ma.onclick = function () {
            ma.innerHTML = yanzhengma(4);
            // bg();
            sty();
        }
        //验证是否通过
        function yanzheng() {
            
            if ($('._code_val').val() == ma.innerText) {
                isok = true;
                
            } else {
                $('.yzmsure').html('<em class="ico"></em>验证码错误');
                isok = false;
                // $('._mobile_code_val').css('display','block').text('验证失败，请重新输入');
                // text.innerHTML = "验证失败，请重新输入";
            }
        }
        $('._code_mobile').click(yanzheng);
        // btn.onclick = yanzheng;
    
    });
    $('#readme').click(function(){
        $('#readme').prop("checked");
        console.log($('#readme').prop("checked"));
    
    });
    $('.btn-ljzc').click(function(){
        
        if($('#readme').prop("checked")==true && isok == true){ //有bug
              console.log(isok);                  
            $('.btn-ljzc').prop('type','buttom');
            $('.btn-ljzc').click(function(){
                infdata(); //调用函数 传数据
            });
            
        }else if($('#readme').prop("checked")==false){
            $('.xieyi').html('<em class="ico"></em>请接受健一用户协议！ ');
        }
    });
    
    function infdata(){
    
        let name =$.trim($('#mobile').val()) ;
        let password =$.trim($('.jsszmm').val()) ;
        $.ajax({
            type:'post',
            // url:'../api/03login.php',
            url:'../api/jiekou.php',
            data:{
                name,
                password,
                branch:'reg'
            },
            success: str => {
                // console.log(str);
                // 存cookie
                if(str == 'yes'){
                    // setdata();
                    let url = getcookie('url');
                    if(url){ //有上一页，登陆成功跳回上一页
                        location.href = url;
                    }else{ //没有上一页就跳转到首页
                        location.href = 'j1_login.html';
                    }
                }else{ //跳到首页
                    // alert('登陆失败');
                    
                }
            },
            error : function(status) {//可选的
                //失败的回调
                console.log(status);
                
            }

        });     

    }

});


