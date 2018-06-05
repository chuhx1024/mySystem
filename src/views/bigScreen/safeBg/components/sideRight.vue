<template>
  <div class="container">
    <div class="top">
      <div class="top-left top-public fl">
        <img src="../img/zb_sl01.png" alt="">

      </div>
      <div class="top-right top-public fr">
        <img src="../img/zb_sl02.png" alt="">

      </div>
    </div>
    <div class="middle public">
      <h2>各协助单位安全保障能力</h2>
      <img src="../img/ditu_tl.png" alt="" class="corners01">
      <img src="../img/ditu_tr.png" alt="" class="corners02">
      <img src="../img/ditu_br.png" alt="" class="corners03">
      <img src="../img/ditu_bl.png" alt="" class="corners04">
      <div class="content">
        <div class="content-pub content-lt fl">
          <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-rt fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-lb fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-rb fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom public">
      <h2>各协助单位安全保障能力</h2>
      <img src="../img/ditu_tl.png" alt="" class="corners01">
      <img src="../img/ditu_tr.png" alt="" class="corners02">
      <img src="../img/ditu_br.png" alt="" class="corners03">
      <img src="../img/ditu_bl.png" alt="" class="corners04">
       <div class="content">
        <div class="content-pub content-lt fl">
          <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-rt fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-lb fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
        <div class="content-pub content-rb fl">
           <div class="content-pub-top">
            <img src="../img/ditu_ico.png" alt="">
            <span>北京天融信软件有限公司</span>
          </div>
          <div class="content-pub-bottom fl">
            <div class="content-pub-bottom-left fl">
              <img src="../img/ditu_ico2.png" alt="">
              <div class="fr">
                <h3>12人</h3>
                <p>支撑人数</p>
              </div>
            </div>
            <div class="content-pub-bottom-right fr">
              <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
              <span>解决问题能力</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideRight",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value5: 3.7
    };
  }
};
</script>


<style  rel="stylesheet/scss" lang="scss">
.container {
  width: 100%;
  height: 39rem;
  .top {
    width: 100%;
    height: 4.4rem;
    .top-public {
      height: 100%;
      width: 48%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .top-left {
      margin-right: 2%;
    }
    .top-right {
      margin-left: 2%;
    }
  }
  .public {
    height: 14.6rem;
    margin-top: 2.24rem;
    border: 1px solid #033993;
    border-radius: 21px;
    // background-image: url(../img/ditu_tl.png), url(../img/ditu_tr.png),
    //   url(../img/ditu_br.png), url(../img/ditu_bl.png);
    // background-position: 0% 0%, right top, right bottom, left bottom;
    // background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    margin-bottom: 0.5rem;
    position: relative;
    h2 {
      width: 100%;
      text-align: center;
      position: absolute;
      top: -2rem;
      font-weight: 700;
      color: #ffffff;
      font-family: "Arial", "微软雅黑";
    }
    .corners01 {
      position: absolute;
      left: -2px;
      top: -7px;
    }
    .corners02 {
      position: absolute;
      right: -3px;
      top: -8px;
    }
    .corners03 {
      position: absolute;
      right: -2px;
      bottom: -7px;
    }
    .corners04 {
      position: absolute;
      left: -5px;
      bottom: -8px;
    }
    .content-pub-top {
      height: 27%;
      color: #03d6ff;
      font-size: 0.76rem;
    }
    .content-pub-bottom {
      height: 61%;
      padding: 5% 2%;
      color:#FFF;
      font-size: 0.64rem;
      .content-pub-bottom-left {
        height: 100%;
        width: 40%;
        img {
          width: 40%;
          height: 60%;
        }
        span:first-child {
          display: block;
        }
        span:nth-child(2) {
          display: block;
        }
      }
      .content-pub-bottom-right {
        height: 100%;
        width: 54%;
        .el-rate__icon {
          margin-right: 1px;
        }
      }
    }

    .content {
      width: 98%;
      height: 98%;
      padding: 2%;
      .content-pub {
        width: 47.5%;
        height: 44%;
        border: 1px solid #033993;
      }
      .content-lt {
        margin: 0 1% 1% 0;
        border-radius: 0 0 5% 0;
      }
      .content-rt {
        margin: 0 0 1% 1%;
        border-radius: 0 0 0 5%;
      }
      .content-lb {
        margin: 1% 1% 0 0;
        border-radius: 0 5% 0 0;
      }
      .content-rb {
        margin: 1% 0 0 1%;
        border-radius: 5% 0 0 0;
      }
    }
  }
  .middle {
  }
  .bottom {
  }
}
</style>