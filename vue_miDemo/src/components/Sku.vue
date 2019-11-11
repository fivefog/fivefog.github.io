<template>
  <van-sku 
  v-model="show"
    :sku="sku"
    :goods="goods"
    :goods-id="skuData.goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    :message-config="messageConfig"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked">
    
    <!-- 自定义 sku-header-price -->
      <template slot="sku-header-price" slot-scope="props">
        <div class="van-sku__goods-price">
          <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
        </div>
      </template>
      <template slot="sku-messages" >
       
      </template>

  </van-sku>
  </template>

<script>
import Vue from "vue";
import { Sku } from "vant";
import axios from 'axios'
Vue.use(Sku);
export default {
  // created(){
  //   window.console.log("props",this)
  // },
  data() {
    return {
      img:'',  //自定义的
      show: true,
       num:0, //路径的图片序号
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                //imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                //previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片

              },
              {
                id: "1215",
                name: "蓝色",
                // imgUrl: "https://img.yzcdn.cn/2.jpg",
                // previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      quota:0,
      quotaUsed:4,
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3 // 数据结构见下方文档
      },
      skuData: {
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          '留言1': 'xxxx'
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: '30349',
          s2: '1193',
          s3: '0',
          stock_num: 111
        }
      }
    };
  },
  created(){
    //  this.numComputed;  只执行一次
     this.onLoad();
     
  },
  methods:{
     //获取推荐数据表的数据
    onLoad(){
      
      axios.get('http://localhost:3000/tuijian')
      .then( ({data}) => {
        this.img = data;
        // this.num = this.$route.path.split('').splice(-1) * 1; //根据路径获取第几张图的序号
        window.console.log(this.img); 
        
    })    
    },

    onBuyClicked(){

    },
    onAddCartClicked(){

    }
  },
  computed:{
    numComputed:function(){
       let num = this.$route.path.split('').splice(-1) * 1; //根据路径获取第几张图的序号
        window.console.log('图片序号',num); //0
        return num;
    }
  } ,
  // methods:{
  //   showfn(){
  //      this.show = this.$store.getters.getSkushow;
  //       window.console.log('值：',this.show.value);
  //     return this.show;

  //   }
  // }

  // computed: {
  //   showfn() {
  //      this.show = this.$store.getters.getSkushow.status;
  //       window.console.log("值：", this.$store.getters.getSkushow.status);
  //       return this.$store.getters.getSkushow;
  //     }   
  // }
  watch:{
    '$store.getters.getSkushow.status': function(){
        this.show = this.$store.getters.getSkushow.status;
        window.console.log("值：", this.$store.getters.getSkushow.status);
    },
    // num:function(){
    //    this.num = this.$route.path.split('').splice(-1) * 1; //根据路径获取第几张图的序号
    //     window.console.log('图片序号',this.num); //0
    //     return this.num;
    // } 
    
  }
};
</script>