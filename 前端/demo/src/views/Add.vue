<template>
  <div style="padding:5vh 20vh">
    <el-form
        ref="ruleFormRef"
        label-width="auto"
        :model="form"
        style="width:100%"
        :rules="rules"
      >
        <el-form-item label="标题" prop="title">
          <el-input size="large" v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <div style="border: 1px solid #ccc;">
            <Toolbar :editor="editorRef" 
              :defaultConfig="toolbarConfig" mode="default"/>
            <Editor  v-model="form.content" style="height: 50vh;"
              :defaultConfig="editorConfig" mode="default" @onCreated="editorInit"/>
          </div>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button type="primary" @click="submitFunc(ruleFormRef)">提交</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script setup>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { onBeforeUnmount, ref, shallowRef,reactive } from 'vue'
import { add } from '@/api/api'
import { ElMessage } from 'element-plus'
import moment from 'moment';
// 以下是官方要求的写法（shallowRef 仅提供一层浅层的响应性）
const editorRef = shallowRef()

// 工具栏和编辑栏 配置
const toolbarConfig = {
  excludeKeys: []
}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

// 编辑器初始化完成时的回调函数
const editorInit = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const click = () => {
  window.alert("模拟提交，编辑器内容为：\n\n" + valueHtml.value)
}
const form = ref({
  title: '',
  createTime:'',
  content: '',
})
const rules = reactive({
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' },
  ],
  content: [{required: true,message: '请输入内容',trigger: 'blur'}],
})
const ruleFormRef = ref()
const submitFunc = (ruleFormRef) => {
  ruleFormRef.validate((valid, fields) => {
    if (valid) {
      const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      console.log(currentTime);
      form.value.createTime = currentTime
      add(form.value).then(res => {
        form.value.title = ''
        form.value.createTime = ''
        form.value.content = ''
        ElMessage({
          message: '提交成功.',
          type: 'success',
        })
      }).catch(res => {
        console.log(res);
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style>
</style>
