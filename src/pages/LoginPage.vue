 
<template>
  <div class="login-wrapper">
    <div class="login-form">
      <el-form ref="ruleFormRef" :model="loginForm" :rules="rules">
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button type="info" @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

// 2. 通过 actions 去修改  
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
// 表单的绑定
let loginForm = reactive({
  username: 'admin',
  password: '123456',
});
// 表单验证
let rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 4, max: 16, message: '账号4-16位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 16, message: '密码4-16位', trigger: 'blur' },
  ],
});
// 重置按钮操作
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
// 登录操作
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (!valid) return;
    router.push('/home');
  });
};

// 生命周期区域
onMounted(() => {
  console.log('生命周期区域');
});
</script>
<style scoped lang="scss">
.login-wrapper {
  background-color: #2c3940;
  width: 100vw;
  height: 100vh;
  .login-form {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    padding-top: 50px;
    box-sizing: border-box;
    .btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
