/* 
    @Description:封装一个函数可以生成任意范围内的随机数
    @Author:fivefog
    @Date: 2019-8-24
*/
function ranNum(min, max) { //[0,1)
    return parseInt(Math.random() * (max - min + 1)) + min;
}
/* 
    @Description:参数转成对象 和 对象转成参数
    @Author:fivefog
    @Date: 2019-8-24
*/
//封装函数：参数转成对象
function strToObj(str) {
    var obj = {};
    var arr1 = str.split('&');//["name=apple", "price=8999"]
    for (var i in arr1) {
        var arr2 = arr1[i].split('=');
        obj[arr2[0]] = arr2[1];
    }
    return obj;
}

function objToStr(obj) {
    //对象转成参数   {name:apple,price:8999}  name=apple&price=8999
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';//name=apple&price=8999&
    }
    return str.slice(0, -1);
}

/* 
    @Description:电子时钟补零操作
    @Author:fivefog
    @Date: 2019-8-27
*/
function toDb(num) {  //字符串形式
    if (num < 10) {
        return '0' + num;
    }
    else {
        return '' + num;
    }
}
/* 
    @Description:将秒换成xx天xx时xx分xx秒
    @Author:fivefog
    @Date: 2019-8-27
*/
 //显示格式：xx时xx分XX秒,参数：秒数，返回值：返回相关数据，做成json
        
 function timeSet(num){ 
     // num ：秒数
    var sec = toDb(num % 60); //秒
    var min = toDb(Math.floor(num / 60 % 60)); //分
    var hour = toDb(Math.floor(num / 60 /60) % 24);//时
    var day = Math.floor(num / 60 / 60 / 24); //天
    return {
        'secs': sec,
        'mins': min,
        'hours': hour,
        'days': day
    }
}

/* 
    @Description:将秒换成 年，月，日，时，分，秒
    @Author:fivefog
    @Date: 2019-9-20
*/
 //参数：秒数，返回值：返回相关数据，ES6语法
 function getTimeSec(secs){ //传入秒
    let time = new Date(secs *1000);
    let year = time.getFullYear();
    let mon = time.getMonth() + 1;
    let date = time.getDate(); //日
    let hours = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    return {
        year,
        mon,
        date,
        hours,
        mins,
        sec
    }
}

/* 
    @Description:获取和设置css样式，参数个数不同功能不同
    @Author:fivefog
    @Date: 2019-09-04
*/
function css(){
    if(arguments.length == 2){ //获取样式
        // console.log(arguments[0]);
        
        if(getComputedStyle(arguments[0],false)){ //标准浏览器
            var attr = arguments[1]; //属性名
            return getComputedStyle(arguments[0],false)[attr];
        }else{ //IE678
            var attr = arguments[1]; //属性名
            return arguments[0].currentStyle[attr];
        }
    }else if(arguments.length == 3){ //设置样式(只能通过设置内联样式来改变)
        var attr = arguments[1]; //属性名
        arguments[0].style[attr] = arguments[2];
    }
}
/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}
/*
           仿jq的ajax封装：
               ajax({
                   type : 'get', 必填
                   url : 接口,必填
                   data : { //选填
                       name ：'蛋黄酥',
                       price : '39.9'
                   },
                   asyn : true,可选
                   success : function(str) {
                       //成功的回调
                   },
                   error : function(status) {//可选的
                       //失败的回调
                   }

               });
       */
function ajax(opt) {
    //默认参数
    let defaultOpt = {
        data: '', 
        asyn: true, //同步或异步，true为异步
        error: null
    }

    //替补方案
    Object.assign(defaultOpt, opt);//用defaultOpt

    //1.创建对象
    let xhr = new XMLHttpRequest();

    //2.写好参数，准备工作  open()
    //防止缓存（添加时间戳 new Date()）
    if (defaultOpt.type.toLowerCase() == 'get') {
        //get请求
        if (defaultOpt.data) {
            //有数据，把数据拼接在url
            defaultOpt.url = defaultOpt.url + '?time'+new Date() + '&' + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else {
        //post请求
        xhr.open('post', defaultOpt.url + '?time'+new Date(), defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xhr.send(data);
    }

    //4.接收数据，状态码发生改变时触发
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                //成功  
                defaultOpt.success(xhr.responseText);//实参
            } else {
                //失败
                if (defaultOpt.error) {
                    defaultOpt.error(xhr.status);//实参：http状态码
                }
            }
        }
    }

}

/* 
    @Description:获取和设置、删除cookie
    @Author:fivefog
    @Date: 2019-09-19
*/
//获取cookie
function getcookie(key) {
    let str = document.cookie;//username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//设置cookie
function setcookie(key, val, iday) {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

//删除
function removecookie(key) {
    setcookie(key, '', -1);
}


/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    tel: function (str) { //号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },
    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    psweasy: function (str) { //6-18位首字母开头
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },
    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },
    name: function (str) { //账号 字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    }
}