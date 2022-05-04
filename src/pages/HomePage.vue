<template>
  <div class="common-layout">
    <Header></Header>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Menu from './Menu/Menu.vue';
import Header from '@/components/Header.vue';
</script>
