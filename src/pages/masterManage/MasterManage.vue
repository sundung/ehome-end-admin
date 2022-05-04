<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <el-col :span="5" class="headerSearch">
        <div class="text">师傅搜索</div>
        <el-input v-model="masterSearch" placeholder="请输入姓名、手机号搜索" />
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
          <el-icon><search /></el-icon>
          <span>搜索</span>
        </el-button>
        <el-button>重置</el-button>
      </el-col>
    </el-row>
  </div>
  <div class="tableArea">
    <el-table class="table" :data="tableData" border style="width: 100%">
      <el-table-column prop="masterNo" label="师傅编号" width="120" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="customerIphoneNum" label="客户手机号" width="120" />
      <el-table-column prop="address" label="地址" width="180" />
      <el-table-column prop="isAuth" label="是否认证" width="100" />
      <el-table-column prop="serviceType" label="服务类目" width="120" />
      <el-table-column prop="serviceNum" label="服务次数" width="120" />
      <el-table-column prop="orderAmount" label="订单金额（￥)" width="120" />
      <el-table-column prop="receiveOrderStatus" label="接单状态" width="120" />
      <el-table-column fixed="right" label="操作" width="140">
        <template #default>
          <el-button type="text" size="small">停止接单</el-button>
          <el-button type="text" size="small">查看认证</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const masterSearch = ref(''); // 客户搜索
const homeApplianceTypeValue = ref(''); // 师傅搜索
const serviceStatusValue = ref(''); // 师傅搜索
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
    masterNo: '师傅编号',
    name: '姓名',
    customerIphoneNum: '客户手机号',
    address: '地址',
    isAuth: '是否认证',
    serviceType: '服务类目',
    serviceNum: '服务次数',
    orderAmount: '订单金额（￥)',
    receiveOrderStatus: '接单状态',
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
