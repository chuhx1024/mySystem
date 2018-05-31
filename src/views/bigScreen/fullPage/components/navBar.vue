<template>
  <div class="nav-bar">
    <div class="nav-container">
      <div class="nav-left fl">
				<div class="logo">
					<img src="../img/logo.png" alt="#">
					<span>内蒙古自治区网络安全态势感知系统</span>
				</div>
			</div>
			<div class="nav-middle fl">
        <p>指挥中心</p>
        <el-menu :default-active="activeIndex" class="el-menu-demo nav-btn-chx" mode="horizontal" @select="handleSelect" background-color="rgba(0,0,0,0)" text-color="#fff" active-text-color="rgb(33,156,252)">
          <el-menu-item index="1">风险态势</el-menu-item>
          <el-menu-item index="2">威胁态势</el-menu-item>
          <el-menu-item index="3">指挥调度</el-menu-item>
          <el-menu-item index="4">态势分析</el-menu-item>
        </el-menu>
      </div>
			<div class="nav-right fr"></div>
    </div>
   
		
	</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
     
      msg: "Welcome to Your Vue.js App",
    };
  }
};
</script>


<style scoped>
.nav-container{
  height: 3.4rem;
  width: 100%;
	background:url(../img/tou_bj.png) no-repeat top center ;
  background-size: 100% 100%;
}
.nav-left{
	width: 40%;
}
.nav-lef .logo img{
	width:3.4rem;
	height: 3.4rem;
  vertical-align: middle;
  background-size: 100% 100%;
}
.nav-left .logo span{
	font-size:1.2rem;
	font-weight: 700;
	color:#fff;
	display: inline-block;
	height: 3.4rem;
	line-height: 2.4rem;
  vertical-align: top;
}
.nav-middle{
	width:20%;
  color:#fff;
	text-align: center;
	height: 3.4rem;
  line-height: 2.4rem;
	font-size: 1.04rem;
	font-weight: 700;

}
.nav-right{
	width:0%;

}
.fl{
  float: left;
}
.fr{
  float: right;
}
.nav-btn-chx.el-menu-demo{
      border-bottom: none; 
}
.nav-btn-chx .el-menu-item{
  height:25px;
  width: 23%;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  font-family: "微软雅黑";
  font-size: 12px;
  padding: 0 4px;
  margin: 0 2px;
  border-bottom:3px solid #fff !important;
  
}
.nav-btn-chx .el-menu-item:hover{
  background-color:rgba(0,0,0,0) !important;
   border-bottom:3px solid #219cfc !important;
  color:#219cfc !important;
}



</style>
