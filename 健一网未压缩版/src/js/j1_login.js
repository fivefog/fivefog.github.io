$(function(){
    // console.log($("#j1_login .signin-title")[0]);
    // var  j1_login = document.getElementById("j1_login");
    // var signin_title = j1_login.getElementsByClassName("signin-title")[0];
     $("#j1_login .signin-title").click(function(ev) { 
    // signin_title.onclick = function(ev){
        // console.log(ev.target.className);
        
        if(ev.target.className == 'radio1'){
  

            $(".normaldl").css('display','block');
            $(".phonedl").css('display','none');
            
        }else if(ev.target.className == 'radio2'){
            

            $(".normaldl").css('display','none');
            $(".phonedl").css('display','block');

            
        }
    // }
    });

    
});




$(function(){
    /*
           需求：
               * 验证用户名是否存在：select
               * 不存在就可以注册：insert
               * 注册成功可以登陆(存cookie) : select
               * 登陆成功跳转页面，可以退出(查cookie是否含有该用户)
                   * 如果是在注册页、首页跳转到登陆页；本来就在登陆页：登陆成功就跳转到首页 : window.open(url) location.href=url 
                   * 如果是非登陆页登陆的，跳转回上一页(localstorage存上一页路径)
               * 退出：点击退出就删除cookie
       */
      //普通登录
   $('#ptLogin').click(() =>{
   // $('#ptLogin').click(function(){       
       let name =$.trim($('.signin-main ._login_name_inf').val()) ;
       let password = $.trim($('.signin-main ._password_inf').val());
       if(name && password){
            
            let usn = getcookie('username');
            // console.log(usn);
            
            if(usn){
                alert('你已经登陆了');
            }else{
                // console.log('未登录');
                $.ajax({
                    type:'post',
                    // url:'../api/03login.php',
                    url:'../api/jiekou.php',
                    data:{
                        name,
                        password,
                        branch:'login'
                    },
                    success: str => {
                        // console.log(str);
                        // 存cookie
                        if(str == 'yes'){
                            // alert('登陆成功');
                            setdata();
                            let url = getcookie('url');
                            if(url){ //有上一页，登陆成功跳回上一页
                                location.href = url;
                            }else{ //没有上一页就跳转到首页
                                location.href = '../j1_main.html';
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
                function setdata() {
                    setcookie('username', name, 10);
                }
            }
       }else if(!name || !password){
            console.log('不能为空');
            if(!name){
                $('#errMsgName').text("请输入用户名").addClass('focus error');
                if($('._login_name_inf').focus(function(){
                    $('#errMsgName').removeClass('focus error').text('');
                    
                }));
            }else if(!password){

            }
            
       }
   });

   //手机登录
   $('.phonelogin').click(() => {
    let name =$.trim($('#input_quickLogin').val()) ;
    let password = $.trim($('#input_img_code').val());

    if(name && password){

        if(checkReg.tel(name)){ //正则

            let usn = getcookie('username');
            // console.log(usn);
            if(usn){
                alert('你已经登陆了');
            }else{
                // console.log('未登录');
                $.ajax({
                    type:'post',
                    // url:'../api/03login.php',
                    url:'../api/jiekou.php',
                    data:{
                        name,
                        password,
                        branch:'login'
                    },
                    success: str => {
                        console.log(str);
                        // 存cookie
                        if(str == 'yes'){
                            // alert('登陆成功');
                            setdata();
                            let url = getcookie('url');
                            if(url){ //有上一页，登陆成功跳回上一页
                                location.href = url;
                            }else{ //没有上一页就跳转到首页
                                location.href = '../j1_main.html';
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
                function setdata() {
                    setcookie('username', name, 10);
                }
            }
        }else{ //手机号格式不正确
            $('#label_quick_login_phone').css("display",'block').addClass('focus error');
             if($('#input_quickLogin').focus(function(){
                 $('#label_quick_login_phone').removeClass('focus error').css("display",'none');
                 
             }));
        }
         
    }else if(!name || !password){
         
         if(!name){
             $('#label_quick_login_phone').css("display",'block').addClass('focus error');
             if($('#input_quickLogin').focus(function(){
                 $('#label_quick_login_phone').removeClass('focus error').css("display",'none');
                 
             }));
         }
         if(!password){
             $('#input_img_code').addClass('bian-02');
            $('.label_img_code').text("请输入验证码").addClass('focus error');
            if($('#input_img_code').focus(function(){
                $('.label_img_code').removeClass('focus error').text('');
                $('#input_img_code').removeClass('bian-02');
                console.log('快捷不能为空');
            }));
         }
         
    }
   });
});

$('.freezc').click(function(){
    location.href = '../html/j1_reg.html';  
});