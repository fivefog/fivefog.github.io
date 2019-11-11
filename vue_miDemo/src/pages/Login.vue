<template>
  <div class="loginpage">
    <div class="layout">
      <div class="header_tit">
        <div class="header_logo">
          <i class="iconfont icon-xiaomi"></i>
        </div>
        <h4 class="header_tit_txt">小米账号登录</h4>
      </div>
      <div class="logininf">
        <!-- 输入手机号 -->
        <van-cell-group>
          <!-- 输入不为空时显示清除符号 -->
          <van-field
            label="+86 >"
            type="tel"
            v-model="value"
            placeholder="手机号码"
            right-icon="clear"
            v-if="valuefn()"
            @click-right-icon="cleanfn()"
          />
          <!-- 输入为空时不显示清除符号 -->
          <van-field label="+86 >" type="tel" v-model="value" placeholder="手机号码" v-else />
        </van-cell-group>

        <!-- 发送验证码 -->
        <van-cell-group>
          <van-field v-model="sms" center clearable placeholder="短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <!-- 按钮 -->
        <div class="btns_bg">
          <input class="btnadpt" id="login-button" type="submit" value="立即登录/注册" />
          <span
            id="custom_display_8"
            class="sns-default-container sns_default_container"
            style="display: none;"
          ></span>
        </div>
        <!-- 其他方式登录 -->
        <div class="other_login_type">
            <van-divider>其他方式登录</van-divider>
            <div class="sns-login-links">
                <a href="###" class="icon_type btn_facebook sns-login-link" target="_blank"></a>
                <a href="###" class="icon_type btn_google sns-login-link"></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Button } from "vant";

Vue.use(Field);
Vue.use(Button);

// 图标
import { Icon } from "vant";
Vue.use(Icon);

import { Divider } from 'vant';
Vue.use(Divider)

export default {
  data() {
    return {
      value: "",
      sms: ""
    };
  },
  methods: {
    valuefn() {
      if (this.value.trim()) {
        // window.console.log(this.value);
        return this.value;
      }
    },
    cleanfn() {
      return (this.value = "");
    }
  }
};
</script>

<style scoped lang="scss">
@function vw($px) {
  @return ($px / 375) * 100vw;
}
.layout {
  width: 100%;
  margin: 0 auto vw(30);
  padding: 0 vw(20);
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .header_tit {
    padding: vw(30) 0 vw(10);
    display: flex;
    flex-direction: column;
    align-items: center;
    .header_logo {
      width: vw(48);
      height: vw(48);
      background: #ff6700;
      text-align: center;
      border-radius: vw(2);
      .icon-xiaomi {
        font-size: vw(30);
        color: #fff;
      }
    }
    .header_tit_txt {
      margin-top: vw(15);
    }
  }
  .logininf {
    .van-cel {
      font-size: vw(20);
      padding: vw(16);
    }
    .btns_bg {
        padding-top: vw(24);
        .btnadpt {
            width: 100%;
            padding: vw(10) 0;
            display: block;
            margin-bottom: vw(14);
            text-align: center;
            font-size: vw(18);
            color: #fff;
            cursor: pointer;
            -webkit-border-radius: vw(6);
            -moz-border-radius: vw(6);
            -o-border-radius: vw(6);
            border-radius: vw(6);
            overflow: hidden;
            background-color: #ff6700;
        }
    }
    // 其他方式
    .other_login_type{
        margin-top: vw(40);
        .sns-login-links{
            text-align: center;
            .icon_type {
                margin: 0 vw(15);
                background: url('../assets/login/sgp_icons_type.png');
                width: vw(30);
                height: vw(30);
                display: inline-block;
                
            }
            .btn_google{
                    background-position: vw(-30) ;
                }
        }
    }
    
  }
}
</style>