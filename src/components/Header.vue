<template>
  <!-- 头部区域 -->
  <el-header>
    <div class="header-text">E到家运营管理</div>
    <el-button type="info" @click="handleOut">退出</el-button>
  </el-header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
// 退出操作
const handleOut = () => {
  // 清空 token
  window.sessionStorage.clear();
  // 跳转到登录页面
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #3e8fbc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-text {
    font-size: 36px;
    color: #fff;
  }
}
</style>
