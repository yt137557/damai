<template>
  <div class="daBody">
    <div class="login-box">
      <img
        src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png"
        alt="我是大麦网的logo"
        width="100px"
        height="45px"
        title="我是logo"
      />
    </div>
    <form action="#">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          autocomplete="username"
          @click-right-icon="$toast('只能使用不超过12位的数字')"
        />
        <van-field
          v-model="password1"
          type="password"
          label="密码"
          right-icon="question-o"
          placeholder="请输入密码"
          required
          autocomplete="current-password"
          @click-right-icon="$toast('输入6到18位的数字、字母、下划线')"
        />
      </van-cell-group>
    </form>
    <van-button type="primary" size="large" @click="chance" class="l-signUp">登录</van-button>
    <router-link class="newPop" to="/sign-up">新用户注册</router-link>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import '../../assets/styles/base.scss';
.daBody {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.login-box {
  display: flex;
  height: 122px;
  justify-content: center;
  align-items: center;
}
.l-signUp {
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  border-radius: 3px;
  color: hsla(0, 0%, 100%, 0.6);
  background-image: linear-gradient(90deg, #ff4aae, #ff1268);
  background-color: #ff1268;
  border: none;
}
.newPop {
  float: right;
  font-size: 12px;
  margin: 0;
  color: #999;
}
</style>

