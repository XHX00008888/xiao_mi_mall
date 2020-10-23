<template>
  <div class="footer">
    <div class="container">
      <div class="logo"></div>
      <div class="name">小米商城</div>
      <div class="other">
        <span>河畔一角主页</span>| <span>Vue全栈课程</span>|
        <span>React全家桶课程</span>| <span>微信支付专项课程</span>|
        <span>配套课程：Java通用型支付+电商平台双系统实战</span>
      </div>
      <div class="copy-right">
        Copyright ©2020 <span class="mi">mi.futurefe.com</span> All Rights
        Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang='scss'>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.footer {
  width: 100%;
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  .container {
    text-align: center;
    .logo {
      @include bgImg(53px, 36px, "/imgs/logo-footer.png");
      //margin-top: 43px;
      margin: 43px 0 10px 0;
    }
    .other{
      margin: 20px 0 10px 0;
      span{
        margin: 0 5px;
      }
    }
    .mi{
      color:$colorA;
    }
  }
}
</style>