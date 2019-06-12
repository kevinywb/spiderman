<template>
  <div class="login">
    <el-row>
      <el-col :span="7" :offset="8">
        <img src="../../assets/images/spiderman.png" alt="Gerapy">
        <span class="title">Spiderman</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onLogin">立即登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
    onLogin() {
      console.log("login!");
    }
  },
  mounted() {}
};
</script>
<style>
.login {
  text-align: center;
}

.login img {
  width: 80px;
  height: 80px;
}

.login .title {
  font-family: fantasy;
  font-size: 26px;
  vertical-align: middle;
}

.login .el-row {
  margin-bottom: 20px;
}

.login .el-row:first-child {
  padding-top: 150px;
}

.login .el-row:last-child {
  margin-bottom: 0;
}
</style>