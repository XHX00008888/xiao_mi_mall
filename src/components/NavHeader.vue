<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">退出</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="'/product' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
    };
  },
  mounted() {
    this.getProcuctList();
  },
  methods: {
    getProcuctList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
}
.nav-header {
  .container {
    position: relative;
    height: 112px;
    @include flex();
    .header-menu {
      width: 643px;
      padding-left: 209px;
      .item-menu {
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;
        span {
          cursor: pointer;
        }
        &:hover {
          color: $colorA;
          .children {
            height: 220px;
            opacity: 1;
            display: block;
          }
        }
        .children {
          //display: none;
          position: absolute;
          top: 112px;
          left: 0;
          width: 1226px;
          height: 0;
          opacity: 0;
          overflow: hidden;
          border-top: 1px solid #e5e5e5;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          z-index: 10;
          transition: all .5s;
          background-color: #fff;
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            height: 220px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            a {
              display: inline-block;
              .pro-img {
                height: 137px;
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color:$colorB;
              }
              .pro-price{
                color: $colorA;
              }
            }
            &::before{
              content: " ";
              position: absolute;
              top:28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }
            &:last-child:before{
              display: none;
            }
          }
        }
      }
    }
    .header-search{
      width: 319px;
      .wrapper{
        height: 50px;
        border: 1px solid #E0E0E0;
        display: flex;
        align-items: center;
        input{
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #E0E0E0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
        }
        a{
          @include bgImg(18px,18px,'/imgs/icon-search.png');
          margin-left: 17px;
        }
      }
    }
  }
}
</style>