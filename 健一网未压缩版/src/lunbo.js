function Lunbo(opt) {
    //构造函数放属性
    this.defaultData = {//可选项,用默认参数
        iw: 500,//宽度默认500px
        ih: 300,//高度默认300px
        time: 2//图片切换时间默认2秒
    }

    Object.assign(this.defaultData,opt);//用默认参数
    
    //找节点
    this.box = document.getElementById(this.defaultData.ele);
    this.list = this.box.getElementsByClassName('imglist')[0];
    this.light = this.box.getElementsByClassName('light')[0];
    this.prevBtn = this.box.getElementsByClassName('prev')[0];
    this.nextBtn = this.box.getElementsByClassName('next')[0];
    this.posibtn = this.box.getElementsByClassName('posibtn')[0];
    this.timer = null;
    this.num = 0;//可视区图片的下标
    this.data = this.defaultData.imgdata;
    this.time = this.defaultData.time * 1000;
    this.imglist = null;
    //宽高的设置
    this.list.style = `width:${this.defaultData.iw}px;height:${this.defaultData.ih}px;`;
    this.box.style = `width:${this.defaultData.iw}px;height:${this.defaultData.ih}px;`;
    this.posibtn.style.width = this.light.style.width = this.defaultData.iw + 'px';
    this.init();
}

//初始化函数
//方法挂在原型对象下面：
Lunbo.prototype.init = function () {
    //渲染li节点
    let str = this.data.map(item=>{
        return `<li style="width:${this.defaultData.iw}px;height:${this.defaultData.ih}px;"><img src="${item}" alt=""></li>`;
    }).join('');  
    this.list.children[0].innerHTML = str; 
    this.imglist = this.list.getElementsByTagName('li');
    this.iw = this.imglist[0].offsetWidth;
    //全部图片透明度为0；第一张不透明
    for(let ele of this.imglist){
        ele.style.opacity = 0;
    }
    this.imglist[0].style.opacity = 100;
    //点击对应焦点切换图片
    let html = '';
    for(let i =0;i < this.imglist.length;i++){
        html += `<span>${i+1}</span>`;
    }
    this.light.innerHTML = html;
    this.light.children[0].className = 'active';
    //利用事件委托给焦点绑定事件
    this.light.onclick = ev => {
        this.movelight(ev);
    }
}
Lunbo.prototype.movelight = function (ev) {
    if(ev.target.tagName.toLowerCase() == 'span'){
        let index = ev.target.innerHTML -1;
        if(index > this.num){ //选择了下一张
            startMove(this.imglist[this.num],{'opacity':0});
            startMove(this.imglist[index],{'opacity':100});
        }if(index < this.num){ //选择了上一张
            startMove(this.imglist[this.num],{'opacity':100});
            startMove(this.imglist[index],{'opacity':0});
        }
        this.num = index;
        this.liang();
    }
    
    
}
//焦点跟随
Lunbo.prototype.liang = function () {
    for (let i = 0; i < this.imglist.length; i++) {//排他
        this.light.children[i].className = '';
    }
    this.light.children[this.num].className = 'active';
}