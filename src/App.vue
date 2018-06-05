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
</style>
