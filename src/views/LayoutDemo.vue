<template>
  <div>
    <span>每行24分栏布局</span>
    <el-row>
      <el-col :span="12" class="lightgreen-box">示例1</el-col>
      <el-col :span="12" class="orange-box">示例1</el-col>
    </el-row>
    <el-divider></el-divider>
    <span>分栏间隔 无效</span>
    <el-row :gutter="50">
      <el-col :span="8" class="lightgreen-box">示例2</el-col>
      <el-col :span="8" class="orange-box">示例2</el-col>
      <el-col :span="8" class="lightgreen-box">示例2</el-col>
    </el-row>
    <el-divider></el-divider>
    <span>分栏间隔 有效</span>
    <el-row :gutter="24">
      <el-col :span="8">
        <div class="lightgreen-box">示例3</div>
      </el-col>
      <el-col :span="8">
        <div class="orange-box">示例3</div>
      </el-col>
      <el-col :span="8">
        <div class="lightgreen-box">示例3</div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span>分栏偏移</span>
    <el-row>
      <el-col :span="8" :offset="16">
        <div class="lightgreen-box">示例4</div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span>对齐方式</span>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <div class="lightgreen-box">示例5</div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <span>响应式布局</span>
    <el-row>
      <el-col :lg="6" :xs="24" class="lightgreen-box">示例6</el-col>
      <el-col :lg="6" :xs="24" class="orange-box">示例6</el-col>
      <el-col :lg="6" :xs="24" class="lightgreen-box">示例6</el-col>
      <el-col :lg="6" :xs="24" class="orange-box">示例6</el-col>
    </el-row>
  </div>
</template>
<style scoped>
.lightgreen-box {
  background-color: lightgreen;
  height: 24px;
}
.orange-box {
  background-color: orange;
  height: 24px;
}
</style>