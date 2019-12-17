    /*  
        大盒子name装着导航栏标题nav_name和切换区域con_name
        有bug，tab方法不能实现复用
    */
    function Tabxx(classname,nav_name,con_name,act_name) { //构造函数：放属性
        this.boxname = document.getElementsByClassName(classname)[0];
        
        this.nav = this.boxname.getElementsByClassName(nav_name);
        this.con = this.boxname.getElementsByClassName(con_name);     
        // this.type = type; //(有this该怎么封装？)是点击还是滑动或者其他  onclick/onmouseover/...
        this.act = act_name;//高亮的类名
        this.init();
        
        
    }
    //方法的添加
    Tabxx.prototype.init = function () {
        
        for(var i =0;i<this.nav.length;i++){
            this.nav[i].index = i; //添加索引，点击时知道选择了哪一个


            let _this = this;
            this.nav[i].onmouseover = function () {
                //排他，高亮
            _this.tab(this);//this指向按钮。_this指向Object
            }
        }
    }
    Tabxx.prototype.tab = function (now) {
        for(var i =0;i<this.nav.length;i++){
            this.nav[i].className = 'remen_a';
            // this.nav[i].className = '';
            // console.log(this.nav[i].className);
            
            this.con[i].style.display = 'none';
        }
        now.className = 'remen_a '+this.act;
        // now.className ='' + this.act;
        console.log(now.className);
        
        this.con[now.index].style.display = 'block';
    }
    