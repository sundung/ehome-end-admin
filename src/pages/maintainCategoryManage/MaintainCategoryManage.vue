<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <el-col :span="2" class="headerSearch">
        <el-button>
          <el-icon><setting /></el-icon>
          <span>添加</span>
        </el-button>
      </el-col>
    </el-row>
  </div>
  <div class="tableArea">
    <el-table class="table" :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column prop="projectName" label="项目名称" />
      <el-table-column prop="serviceNum" label="服务次数" />
      <el-table-column prop="chargeStandard" label="收费标准" />
      <el-table-column prop="chargeInfo" label="收费说明" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const tableData = reactive([
  {
    projectName: '项目名称',
    serviceNum: '服务次数',
    chargeStandard: '收费标准',
    chargeInfo: '收费说明',
  },
]);
</script>

<style lang="scss" scoped>
// 搜索框区域
.headerSearch {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// 表格区域
.tableArea {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
