<template>
  <div>
    普通多选框：
    <el-checkbox v-model="checkedBasketball">篮球</el-checkbox>
    <el-checkbox v-model="checkedFootball">足球</el-checkbox>
    <el-divider></el-divider>
    带边框的多选框:
    <el-checkbox v-model="checkedBasketball" border>篮球</el-checkbox>
    <el-checkbox v-model="checkedFootball" border>足球</el-checkbox>
    <el-divider></el-divider>
    多选框组，选中项{{checkList}}
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="basketball">篮球</el-checkbox>
      <el-checkbox label="football">足球</el-checkbox>
      <el-checkbox label="volleyball">排球</el-checkbox>
    </el-checkbox-group>
    <el-divider></el-divider>
    按钮样式多选框组
    <el-checkbox-group v-model="checkList">
      <el-checkbox-button label="basketball">篮球</el-checkbox-button>
      <el-checkbox-button label="football">足球</el-checkbox-button>
      <el-checkbox-button label="volleyball">排球</el-checkbox-button>
    </el-checkbox-group>
    <el-divider></el-divider>
    多选框组选中数量限制
    <el-checkbox-group v-model="checkList2" :min="1" :max="2">
      <el-checkbox label="basketball">篮球</el-checkbox>
      <el-checkbox label="football">足球</el-checkbox>
      <el-checkbox label="volleyball">排球</el-checkbox>
    </el-checkbox-group>
    <el-divider></el-divider>
    动态生成选项，选中项{{courseSelected}}
    <el-checkbox-group v-model="courseSelected">
      <el-checkbox v-for="item in courseAll" :key="item.id" :label="item.id">{{item.name}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedBasketball: true,
      checkedFootball: false,
      checkList: ['basketball', 'football'],
      checkList2: ['basketball'],
      courseAll: [{
        id: 1,
        name: "语文"
      },
      {
        id: 2,
        name: "数学"
      }],
      courseSelected: [],
    };
  }
};
</script>