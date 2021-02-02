<template>
  <div>
    输入框基本功能：双向绑定
    <el-input v-model="input1"></el-input> 输入内容为：{{input1}}
    <el-divider></el-divider>
    输入框功能1:显示占位文本
    <el-input v-model="input1" placeholder="请输入姓名"></el-input>
    <el-divider></el-divider>
    输入框功能2:禁用
    <el-input v-model="input1" disabled></el-input>
    <el-divider></el-divider>
    输入框功能3:可清空
    <el-input v-model="input1" clearable></el-input>
    <el-divider></el-divider>
    输入框功能4:显示为密码框
    <el-input v-model="input1" show-password></el-input>
    <el-divider></el-divider>
    输入框功能5:显示图标
    <el-input v-model="input1" prefix-icon="el-icon-search"></el-input>
    <el-input v-model="input1" suffix-icon="el-icon-search"></el-input>
    <el-divider></el-divider>
    输入框功能6:输入长度限制
    <el-input v-model="input1" maxlength="10" show-word-limit></el-input>
    <el-divider></el-divider>
    文本域基本功能：显示多行文本
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="input1"></el-input>
    <el-divider></el-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: '',
    }
  }
}
</script>
<style scoped>
.el-input {
  width: 200px;
}
.el-textarea {
  width: 400px;
}
</style>>