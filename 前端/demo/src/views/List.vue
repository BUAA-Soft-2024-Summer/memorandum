<template>
  <div class="about">
    <el-row class="tac">
    <el-col :span="4">
      <el-menu style="height:100%"
        class="el-menu-vertical-demo"
      >
        <h3 class="textAlign">备忘录列表</h3>
        <el-menu-item :index="item.id" v-for="item in list" :key="item.id"> 
          <el-icon><document /></el-icon>
          <span class="textAlign" @click="select(item)">{{item.title}}</span>
          <el-button @click="deleteItemFunc(item.id)">删除</el-button>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <h1 class="textAlign">
        {{ form.title }}
      </h1>
      <div class="textAlign">
        创建时间 : {{ form.createTime }}
      </div>
      <div class="content" style="margin:2vh 2vw" v-html="form.content"></div>
    </el-col>
  </el-row>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import { getUnDelete,deleteItem } from '@/api/api'
import { ElMessage } from 'element-plus'
import { Document } from '@element-plus/icons-vue'
const form = ref({
  title: '',
  createTime:"",
  content: '',
})
const select = (item) => {
  form.value.title = item.title
  form.value.createTime = item.createTime
  form.value.content = item.content
  console.log(list);
}
const list = ref([])
const getDeleteList = () => {
  getUnDelete().then(res => {
    list.value = res
    form.value.title = res[0].title
    form.value.createTime = res[0].createTime
    form.value.content = res[0].content
  } 
  ).catch(err => {
      console.log(err);
    } 
  )
}
const deleteItemFunc = (id) => {
  deleteItem({id:id}).then(res => {
    ElMessage({
      message: '删除成功.',
      type: 'success',
    })
    getDeleteList()
  } 
  ).catch(err => {
      console.log(err);
    } 
  )
}
onMounted(() => {
  getDeleteList()
})
</script>
<style>
.textAlign {
  text-align: center;
  width: 100%;
}
.tac{
  height: 90vh;
}
.content table{
  border: 1px solid #ccc;
}
.content table th,.content table td{
  border: 1px solid #ccc;
}
.content table td{
  padding: 0px 5px;
}

</style>