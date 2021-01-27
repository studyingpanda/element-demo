<template>
  <el-container>
    <el-aside style="width:180px;">
      <el-menu>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">菜单1</el-menu-item>
          <el-menu-item index="1-2">菜单2</el-menu-item>
          <el-menu-item index="1-3">菜单3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>XX管理系统</el-header>
      <el-main>内容区域</el-main>
      <el-footer>版权所有</el-footer>
    </el-container>
  </el-container>
</template>
<style scoped>
.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu {
  background-color: #d3dce6;
}
</style>