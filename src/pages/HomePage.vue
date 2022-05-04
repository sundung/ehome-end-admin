<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Menu from './Menu/Menu.vue';
</script>
