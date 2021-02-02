<template>
  <div>
    基本用法
    <el-input-number v-model="num1" label="请输入数量"></el-input-number>
    <el-divider></el-divider>
    指定最大、最小值
    <el-input-number v-model="num2" :min="1" :max="10" label="请输入数量"></el-input-number>
    <el-divider></el-divider>
    监控输入变化
    <el-input-number v-model="num3" @change="numChange"></el-input-number>
    <el-divider></el-divider>
    自定义步数
    <el-input-number v-model="num4" :step="3"></el-input-number>
    <el-divider></el-divider>
    自定义精度
    <el-input-number v-model="num5" :step="0.01" :precision="2"></el-input-number>
    <el-divider></el-divider>
    调整按钮位置
    <el-input-number v-model="num6" controls-position="right"></el-input-number>
    <el-divider></el-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1,
      num6: 1
    }
  },
  methods: {
    numChange(value) {
      console.log(value);
    }
  }
}
</script>
<style scoped>
</style>>