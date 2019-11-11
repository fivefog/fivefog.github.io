//面向对象轮播图插件制作
function Carouselimg(opt) {
    //构造函数放属性

    /*
            需求：
                * 自动轮播：开启定时器切换图片
                * 点击左右按钮可以切换图片
                * 点击焦点可以切换对应图片
        */

    this.dafaultData = {//可选项,用默认参数
        iw: 500,//宽度默认500px
        ih: 300,//高度默认300px
        time: 2//图片切换时间默认2秒
    }
    // console.log(this.dafaultData);

    Object.assign(this.dafaultData, opt);//用默认参数

    //找节点
    this.box = document.getElementById(this.dafaultData.ele);
    this.list = this.box.getElementsByClassName('imglist')[0];
    this.light = this.box.getElementsByClassName('light')[0];
    this.prevBtn = this.box.getElementsByClassName('prev')[0];
    this.nextBtn = this.box.getElementsByClassName('next')[0];
    this.posibtn = this.box.getElementsByClassName('posibtn')[0];
    this.timer = null;
    this.num = 0;//可视区图片的下标
    this.data = this.dafaultData.imgdata;
    this.time = this.dafaultData.time * 1000;
    this.imglist = null;
    //宽高的设置
    this.list.style = `width:${this.dafaultData.iw}px;height:${this.dafaultData.ih}px;`;
    this.box.style = `width:${this.dafaultData.iw}px;height:${this.dafaultData.ih}px;`;
    this.posibtn.style.width = this.light.style.width = this.dafaultData.iw + 'px';
    this.init();
}

//初始化函数

//方法挂在原型对象下面：
Carouselimg.prototype.init = function () {
    //渲染li节点
    let str = this.data.map(item => {
        return `<li style="width:${this.dafaultData.iw}px;height:${this.dafaultData.ih}px;"><img src="${item}" alt=""></li>`;
    }).join('');
    this.list.children[0].innerHTML = str;
    this.imglist = this.list.getElementsByTagName('li');
    this.iw = this.imglist[0].offsetWidth;

    //全部图片放到右侧，第一张放在可视区
    for (let ele of this.imglist) {
        // ele.style.left = this.iw + 'px';
        ele.style.opacity = 0;
    }
    // this.imglist[0].style.left = 0;
        this.imglist[0].style.opacity = 1;
    //1.自动轮播：开启定时器切换图片
    /*
    this.timer = setInterval(function () {
        this.next();//window调用定时器里面的函数。this指向window
    }.bind(this), this.time);//每隔两秒切换一张图片
*/
    //2.点击左右按钮可以切换图片
    /*
    this.box.onmouseover = () => {//鼠标移入可视区停止播放图片
        clearInterval(this.timer);//E6的箭头函数因为没有this，指向外层，所以是对的
    }
    this.box.onmouseout = () => {//鼠标移出可视区继续播放图片
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            this.next();//window调用定时器里面的函数。this指向window
        }.bind(this), this.time);
    }
    */
    this.prevBtn.onclick = () => {
        //上一张
        this.prev();
    }
    this.nextBtn.onclick = () => {
        //下一张
        this.next();
    }
    //3.点击焦点可以切换对应图片
    let html = '';
    for (let i = 0; i < this.imglist.length; i++) {
        html += `<span>${i + 1}</span>`;
    }
    this.light.innerHTML = html;
    this.light.children[0].className = 'active';

    //利用事件委托给焦点绑定事件
    this.light.onmouseover = ev => {

        this.movelight(ev);
    }

}

Carouselimg.prototype.next = function () {
    //旧图挪走
    //startMove(this.imglist[this.num], { 'left': -this.iw });
    startMove(this.imglist[this.num],{'opacity':0});

    //新图进场
    // num++;
    this.num = ++this.num > this.imglist.length - 1 ? 0 : this.num;
    /*this.imglist[this.num].style.left = this.iw + 'px';//确保新图在右侧:候场
    startMove(this.imglist[this.num], { 'left': 0 });*/
    startMove(this.imglist[this.num],{'opacity':100});

    this.liang();
}

Carouselimg.prototype.prev = function () {
    //旧图挪走
    // startMove(this.imglist[this.num], { 'left': this.iw });
    startMove(this.imglist[this.num],{'opacity':0});

    //新图进场
    // num++;
    this.num = --this.num < 0 ? this.imglist.length - 1 : this.num;
    /*this.imglist[this.num].style.left = -this.iw + 'px';//确保新图在右侧:候场
    startMove(this.imglist[this.num], { 'left': 0 });*/
    startMove(this.imglist[this.num],{'opacity':100});
    this.liang();
}

//焦点跟随
Carouselimg.prototype.liang = function () {
    for (let i = 0; i < this.imglist.length; i++) {//排他
        this.light.children[i].className = '';
    }
    this.light.children[this.num].className = 'active';
}

Carouselimg.prototype.movelight = function (ev) {
    if (ev.target.tagName.toLowerCase() == 'span') {
        // console.log(ev.target.innerHTML);
        let index = ev.target.innerHTML - 1;
        if (index > this.num) {
            //新图从右侧进入
            //旧图挪走(切入方式)
            /*startMove(this.imglist[this.num], { 'left': -this.iw });
            this.imglist[index].style.left = this.iw + 'px';
            startMove(this.imglist[index], { 'left': 0 });*/
            startMove(this.imglist[this.num],{'opacity':0});
            startMove(this.imglist[index], { 'opacity': 100 });
        }
        if (index < this.num) {
            //新图从左侧进入
            /*startMove(this.imglist[this.num], { 'left': this.iw });
            this.imglist[index].style.left = -this.iw + 'px';
            startMove(this.imglist[index], { 'left': 0 });*/
            startMove(this.imglist[this.num],{'opacity':0});
            startMove(this.imglist[index], { 'opacity': 100 });
        }
        this.num = index;
        this.liang();
    }
}

