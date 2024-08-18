<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 8vh;margin-top: 1vh;"
          src="./assets/logo.svg"
          alt="Element logo"
        />
        <h1 style="color: #7fbeff;">小小备忘录</h1>
      </el-menu-item>
      <el-menu-item index="1">查看</el-menu-item>
      <el-menu-item index="2">新建</el-menu-item>
      <el-menu-item index="3">回收站</el-menu-item>
      <el-menu-item index="4">退出登录</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
// import homeAnimation from "@/utils/animation.js";
import {ref, reactive, onMounted} from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  if(key == "1")  router.push('/');
  else if(key == "2")  router.push('/add');
  else if(key == "3")  router.push('/rubbish');
}
onMounted(() => {
  // homeAnimation()
})
</script>
<style scoped >
#app{
  height: 100%;
  width: 100%;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
