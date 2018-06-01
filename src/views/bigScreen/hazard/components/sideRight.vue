<template>
    <div class="container" >
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main1"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main2"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
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
      msg: "Welcome to Your Vue.js App",
    };
  }
};
</script>


<style scoped rel="stylesheet/scss" lang="scss">
 .container{
   width: 100%;
   height: 39rem;
   
  .cell {
    width: 100%;
    height: 13rem;
    background-color: rgba(28, 56, 116, 0.25);
    border: 1px solid #033993;
    border-top:none;
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
   
 }

</style>