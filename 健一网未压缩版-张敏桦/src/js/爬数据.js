var dataitems = document.querySelectorAll('.listsearchmain4 .listsearch-one'); //列表页的单个商品集合 
var arr = [];
//[{},{}]
for (var ele of dataitems) { //遍历每一个商品
    var obj = {};
    if (ele.querySelector('.listsearch-ztimg img')) {
        obj.url = ele.querySelector('.listsearch-ztimg img').src; //商品图片
    }

    if (ele.querySelector('.listsearch-mc a')) {
        obj.title = ele.querySelector('.listsearch-mc a').innerHTML; //商品标题
    }

    if (ele.querySelector('.listsearch-price span')) {
        obj.price = ele.querySelector('.listsearch-price span').innerHTML;
    }

    if (ele.querySelector('.listsearch-des span')) {
        obj.feature = ele.querySelector('.listsearch-des span').innerHTML;
    }
    if (ele.querySelector('.listsearch-des a')) {
        obj.feature = ele.querySelector('.listsearch-des a').innerHTML;
    }
    arr.push(obj);
}
