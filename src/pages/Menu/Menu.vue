<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el_menu"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><grid /></el-icon>
            <span>订单管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><user /></el-icon>
            <span>用户管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><user-filled /></el-icon>
            <span>师傅管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><document-copy /></el-icon>
            <span>维修类别管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><tools /></el-icon>
            <span>配件管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><document /></el-icon>
            <span>结算管理</span>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.el_menu {
  height: 100vh;
  width: 375px;
}
</style>
