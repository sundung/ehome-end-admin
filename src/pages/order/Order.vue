<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <el-col :span="5" class="headerSearch">
        <div class="text">客户搜索</div>
        <el-input v-model="customerSearch" placeholder="请输入姓名、手机号搜索" />
      </el-col>
      <el-col :span="5" class="headerSearch">
        <div class="text">师傅搜索</div>
        <el-input v-model="masterSearch" placeholder="请输入姓名、手机号搜索" />
      </el-col>
      <el-col :span="6" class="headerSearch">
        <div class="text">维修家电类型</div>
        <el-select v-model="homeApplianceTypeValue" class="m-2" placeholder="请选择" size="large">
          <el-option v-for="item in homeApplianceType" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="4" class="headerSearch">
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
      <el-table-column prop="orderNo" label="订单编号" width="100" />
      <el-table-column prop="customer" label="客户" width="100" />
      <el-table-column prop="customerIphoneNum" label="客户手机号" width="100" />
      <el-table-column prop="address" label="地址" width="100" />
      <el-table-column prop="repairProject" label="报修项目" width="100" />
      <el-table-column prop="homeApplianceTypeValue" label="家电类型" width="100" />
      <el-table-column prop="repairNumber" label="报修数量" width="100" />
      <el-table-column prop="problemDescription" label="问题描述" width="100" />
      <el-table-column prop="repairDate" label="报修时间" width="100" />
      <el-table-column prop="orderDate" label="预约上门时间" width="100" />
      <el-table-column prop="serviceStatus" label="服务状态" width="100" />
      <el-table-column prop="cancelDescription" label="取消描述" width="100" />
      <el-table-column prop="orderMaster" label="接单师傅" width="100" />
      <el-table-column prop="orderMasterIphoneNum" label="师傅手机号" width="100" />
      <el-table-column prop="receiveOrderDate" label="接单时间" width="100" />
      <el-table-column prop="goHomeDate" label="上门时间" width="100" />
      <el-table-column prop="endTime" label="结束时间" width="100" />
      <el-table-column prop="orderAmount" label="订单金额（￥)" width="100" />
      <el-table-column prop="maintenanceServiceCharge" label="维修服务费" width="100" />
      <el-table-column prop="materialsExpenses" label="材料费" width="100" />
      <el-table-column prop="materialCost" label="材料成本价" width="100" />
      <el-table-column prop="balanceAmount" label="结余金额" width="100" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button type="text" size="small">派单</el-button>
          <el-button type="text" size="small">取消订单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const customerSearch = ref(''); // 客户搜索
const masterSearch = ref(''); // 师傅搜索
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
    orderNo: '订单编号',
    customer: '客户',
    customerIphoneNum: '客户手机号',
    address: '地址',
    repairProject: '报修项目',
    homeApplianceTypeValue: '家电类型',
    repairNumber: '报修数量',
    problemDescription: '问题描述',
    repairDate: '报修时间',
    orderDate: '预约上门时间',
    serviceStatus: '服务状态',
    cancelDescription: '取消描述',
    orderMaster: '接单师傅',
    orderMasterIphoneNum: '师傅手机号',
    receiveOrderDate: '接单时间',
    goHomeDate: '上门时间',
    endTime: '结束时间',
    orderAmount: '订单金额（￥)',
    maintenanceServiceCharge: '维修服务费',
    materialsExpenses: '材料费',
    materialCost: '材料成本价',
    balanceAmount: '结余金额',
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
    width: 90px;
  }
}
// 表格区域
.tableArea {
  display: flex;
  flex-direction: column;
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
