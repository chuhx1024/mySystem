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
        <el-menu default-active="hazard" class="el-menu-demo nav-btn-chx" mode="horizontal" background-color="rgba(0,0,0,0)" text-color="#fff" active-text-color="rgb(33,156,252)" router>
          <el-menu-item index="hazard">风险态势</el-menu-item>
          <el-menu-item index="threaten">威胁态势</el-menu-item>
          <el-menu-item index="controlCenter">指挥调度</el-menu-item>
          <el-menu-item index="safeBg">态势分析</el-menu-item>
        </el-menu>
      </div>
      <div class="nav-right fr">
        <div class="fr admin">
          <el-dropdown menu-align='start' @command="handleCommand">
            <img src="../img/default.jpg" class="avator">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="fr now-time">
          <span>今天是:</span>
          <span>{{ nowTime | moment("YYYY年MM月DD日 HH:mm:ss") }}</span>
        </div>
        <div class="fr my-date-picker">
          <el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right" size="mini" >
          </el-date-picker>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      nowTime: new Date(),
      msg: "Welcome to Your Vue.js App",
      avb: new Date(),

      value5: [new Date() - 3600 * 1000 * 24 * 365, new Date()],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    //获取实时时间
    getNewTime() {
      setInterval(() => {
        this.nowTime = new Date();
      }, 1000);
    },
    //
    handleCommand(command) {
      if (command == "home") {
        this.$router.push("/bigScreen/hazard");
      } else if (command == "logout") {
        this.$message({
          showClose: true,
          message: "退出成功",
          type: "success"
        });
        this.$router.push("/");
      }
    }
  },
  mounted() {
    this.getNewTime();
  }
};
</script>


<style scoped   rel="stylesheet/scss" lang="scss">
.nav-container {
  height: 3.4rem;
  width: 100%;
  background: url(../img/tou_bj.png) no-repeat top center;
  background-size: 100% 100%;
}
.nav-left {
  width: 40%;
}
.nav-lef .logo img {
  width: 3.4rem;
  height: 3.4rem;
  vertical-align: middle;
  background-size: 100% 100%;
}
.nav-left .logo span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  height: 3.4rem;
  line-height: 2.4rem;
  vertical-align: top;
}
.nav-middle {
  width: 20%;
  color: #fff;
  text-align: center;
  height: 3.4rem;
  line-height: 2.4rem;
  font-size: 1.04rem;
  font-weight: 700;
}
.nav-right {
  width: 40%;
  position: relative;
  .now-time {
    display: inline-block;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 14px;
    color: #fff;
    margin-right: 2%;
  }


  .admin {
    .avator {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
    }
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.nav-btn-chx.el-menu-demo {
  border-bottom: none;
}
.nav-btn-chx .el-menu-item {
  height: 25px;
  width: 23%;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  font-family: "微软雅黑";
  font-size: 12px;
  padding: 0 4px;
  margin: 0 2px;
  border-bottom: 3px solid #fff !important;
}
.nav-btn-chx .el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0) !important;
  border-bottom: 3px solid #219cfc !important;
  color: #219cfc !important;
}
</style>
