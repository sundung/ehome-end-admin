 
<template>
    <div>{{ userStore.name }}</div>
</template>

// 2. 通过 actions 去修改  
<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
userStore.updateName('李四');
</script>
