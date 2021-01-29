<template>
  <div>
    按钮分类：
    <el-button>默认</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="success">success</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning">warning</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="text">text</el-button>
    <el-divider></el-divider>
    按钮样式：
    <el-button type="primary" plain>朴素按钮</el-button>
    <el-button type="primary" round>圆角按钮</el-button>
    <el-button type="primary" circle icon="el-icon-search"></el-button>
    <el-divider></el-divider>
    按钮状态：
    <el-button type="primary">正常</el-button>
    <el-button type="primary" disabled>禁用</el-button>
    <el-divider></el-divider>
    按钮分组：
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-divider></el-divider>
    按钮的尺寸：
    <el-button>默认</el-button>
    <el-button type="primary" size="medium ">medium</el-button>
    <el-button type="primary" size="small">small</el-button>
    <el-button type="primary" size="mini">mini</el-button>
  </div>
</template>
