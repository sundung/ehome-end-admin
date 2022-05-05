<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <el-col :span="5" class="headerSearch">
        <div class="text">配件名称</div>
        <el-input v-model="accessoriesSearch" placeholder="请输入配件名称,搜索" />
      </el-col>
      <el-col :span="7" class="headerSearch">
        <div class="text">维修家电类型</div>
        <el-select v-model="homeApplianceTypeValue" class="m-2" placeholder="请选择" size="large">
          <el-option v-for="item in homeApplianceType" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="5" class="headerSearch">
        <div class="text">服务状态</div>
        <el-select v-model="serviceStatusValue" class="m-2" placeholder="请选择" size="large">
          <el-option v-for="item in serviceStatus" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
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
      <el-table-column prop="accessoriesName" label="配件名称" width="120" />
      <el-table-column prop="belongsType" label="所属类型" width="120" />
      <el-table-column prop="secondaryClassification" label="二级分类" width="120" />
      <el-table-column prop="hasBeenUsedNum" label="已使用数量" width="180" />
      <el-table-column prop="costPrice" label="成本价（元）" width="140" />
      <el-table-column prop="salesPrice" label="销售价（元）" width="140" />
      <el-table-column prop="partsProfits" label="零件利润" width="120" />
      <el-table-column prop="addPeople" label="添加人" width="120" />
      <el-table-column prop="serviceStatus" label="服务状态" width="120" />
      <el-table-column fixed="right" label="操作" width="140">
        <template #default>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const accessoriesSearch = ref(''); // 配件名称搜索
const homeApplianceTypeValue = ref(''); // 维修家电类型
const serviceStatusValue = ref(''); // 服务状态
const homeApplianceType = reactive([
  {
    value: '空调',
    label: '空调',
  },
  {
    value: '冰箱',
    label: '冰箱',
  },
  {
    value: '洗衣机',
    label: '洗衣机',
  },
]);
const serviceStatus = reactive([
  {
    value: '待接单',
    label: '待接单',
  },
  {
    value: '待上门',
    label: '待上门',
  },
  {
    value: '已取消',
    label: '已取消',
  },
]);
const tableData = reactive([
  {
    accessoriesName: '配件名称',
    belongsType: '所属类型',
    secondaryClassification: '二级分类',
    hasBeenUsedNum: '已使用数量',
    costPrice: '成本价（元）',
    salesPrice: '销售价（元）',
    partsProfits: '零件利润',
    addPeople: '添加人',
    serviceStatus: '服务状态',
  },
]);
</script>

<style lang="scss" scoped>
// 搜索框区域
.headerSearch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    display: flex;
    width: 100px;
  }
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
