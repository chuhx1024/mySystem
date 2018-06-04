<template>
    <div class="container" >
        <div class="cell1">
            <div class="fl">
                <img src="../img/jn.png" alt="" class="fl">
                <h2 class="fr">12975</h2>
                <p class="fr">境内攻击数量</p>
            </div>
            <div class="fr">
                <img src="../img/jw.png" alt="" class="fl">
                <h2 class="fr">13675</h2>
                <p class="fr">境外攻击数量</p>
            </div>
           
        </div>
        <div class="cell cell2">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >境内威胁源TOP5</span>
            </h2>
            <div id="main2"></div>
        </div>
        <div class="cell cell3">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >境外威胁源TOP5</span>
            </h2>
            <div id="main3"></div>
        </div>
        <div class="cell cell4">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span>攻击目标偏好</span>
            </h2>
            <div id="main3"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SideRight",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


<style scoped rel="stylesheet/scss" lang="scss">
.container {
  width: 100%;
  height: 39rem;

  .cell {
    width: 100%;
    height: 13rem;
    background-color: rgba(28, 56, 116, 0.25);
    border: 1px solid #033993;
    border-top: none;
    border-radius: 0 21px 0 0;
    background-image: url(../img/z_t01.png), url(../img/z_t02.png);
    background-position: left top, right top;
    background-repeat: no-repeat, no-repeat;
    margin-bottom: 0.4rem;
    h2 {
      height: 17%;
      width: 100%;
      color: #00d8fe;
      span {
        font-weight: 900;
        font-size: 0.64rem;
      }
    }
    div {
      height: 83%;
      width: 100%;
    }
  }
  .cell1 {
    height: 3.9rem;
    width: 100%;
    div {
      border: 1px solid #033993;
      width: 48%;
      height: 3.5rem;
      position: relative;
      img {
        position: absolute;
        top:50%;
        left:8%;
        margin-top: -1rem;
        width: 2rem;
        height: 2rem;
      }
      h2 {
        width: 55%;
        color:#E5E5E9;
        padding-top: 10%;
      }
      p {
        width: 55%;
        color:#E5E5E9;
      }
    }
  }
  .cell2 {
    height: 9.04rem;
  }
  .cell3 {
    height: 9.04rem;
  }
  .cell4 {
    height: 15.88rem;
  }
}
</style>