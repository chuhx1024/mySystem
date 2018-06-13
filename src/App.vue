<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  rel="stylesheet/scss" lang="scss" >
// @font-face{font-family: myFirstFont;src: url('./style/fonts/DS-DIGI.TTF')} 
html,body{
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
}
.fillcontain{
    height: 100%;
    width: 100%;
    
}
// 时间段插件的样式  
.my-date-picker {
  input {
    background-color:rgba(0,0,0,0.2);
    color:#fff !important;
  }
  .el-range-separator{
    color:#fff;
  }
  .el-input__inner {
    color:#fff;
    position: absolute;
    left: 9%;
    top: 10%;
    width: 40%;
    background-color:rgba(0,0,0,0.2);
  }
}
//风险态势 复选框的样式 start
.ts-checkbox{
  float: right;
  margin-right: 2%;
}
//风险态势 复选框的样式 end


</style>
