<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>态势感知管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">
              <span>dsfsf</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">账户:admin</p>
        <p class="tip">密码:123</p>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      showLogin: false
    };
  },
  methods: {
    submitForm: function() {
      if (
        this.loginForm.username == "admin" &&
        this.loginForm.password == "admin"
      ) {
        this.successLogin();
        this.$router.push("bigScreen/hazard");
      }else if (
         this.loginForm.username != "" &&
        this.loginForm.password != ""
      ){
        this.errorLogin();
      }
    },
    errorLogin() {
      this.$message({
        showClose: true,
        message: "用户名或密码输入有误,请重新输入",
        type: "error"
      });
    },
     successLogin() {
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success'
        });
      },


  },
  mounted() {
    this.showLogin = true;
  }
};
</script>

<style lang="scss" scoped>
.login_page {
  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  width: 320px;
  height: 225px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -105px;
  margin-left: -160px;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
