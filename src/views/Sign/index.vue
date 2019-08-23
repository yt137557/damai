<template>
  <div class="daBody">
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="国家地区"
      @click="showPicker = true"
    />

    <van-popup v-model="showPicker" position="bottom" :style="{ height: '40%' }">
      <van-picker
        :columns="columns"
        @change="onChange"
        show-toolbar
        :default-index="0"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
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
        <van-field
          v-model="password2"
          type="password"
          label="密码"
          placeholder="请再次输入密码"
          required
          autocomplete="current-password"
        />
      </van-cell-group>
    </form>
    <van-button
      type="primary"
      size="large"
      @click="chance"
      :disabled="!btnst"
      :class="btnst ? '':'l-signUp1'"
      class="l-signUp"
    >注册</van-button>
    <router-link class="newPop" to="/login">有账号直接去登录</router-link>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import '../../assets/styles/base.scss';
.daBody {
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
}
.l-signUp {
  border-radius: 6px;
}
.l-signUp1 {
  color: hsla(0, 0%, 100%, 0.6);
  background-color: #ff1268;
  border: none;
}
.newPop {
  float: right;
  font-size: 24px;
  margin: 0;
  color: #999;
}
</style>
