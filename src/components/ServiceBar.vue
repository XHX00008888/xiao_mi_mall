<template>
  <div class="service">
    <div class="container">
      <div>预约维修服务</div>
      <div>7天无理由退货</div>
      <div>15天免费换货</div>
      <div>满150元包邮</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'service-bar'
}
</script>

<style lang='scss'>
@import './../assets/scss/mixin.scss';
  .service{
    height: 89px;
    .container{
      display: flex;
      height: 100%;
      align-items: center;
      div{
        position: relative;
        width: 24.9%;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 18px;
        &:nth-child(1)::before{
          position: absolute;
          left: 68px;
          content: "";
          @include bgImg(20px,20px,'/imgs/icon-setting.png');
          margin-right: 5px;
        }
        &:nth-child(2)::before{
          position: absolute;
          left: 68px;
          content: "";
          @include bgImg(20px,20px,'/imgs/icon-7day.png');
          margin-right: 5px;
        }
        &:nth-child(3)::before{
          position: absolute;
          left: 68px;
          content: "";
          @include bgImg(20px,20px,'/imgs/icon-15day.png');
          margin-right: 5px;
        }
        &:nth-child(4)::before{
          position: absolute;
          left: 68px;
          content: "";
          @include bgImg(20px,20px,'/imgs/icon-post.png');
          margin-right: 5px;
        }
      }
    }
  }
</style>