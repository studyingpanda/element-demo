<template>
  <div>
    <el-radio @change="sexChange" v-model="radio1" label="male">男</el-radio>
    <el-radio @change="sexChange" v-model="radio1" label="female">女</el-radio>
    选中:{{radio1}}
    <el-divider></el-divider>
    <el-radio v-model="radio2" label="basketball" border>篮球</el-radio>
    <el-radio v-model="radio2" label="football" border>足球</el-radio>
    选中:{{radio2}}
    <el-divider></el-divider>
    <el-radio-group v-model="radio3">
      <el-radio label="male">男</el-radio>
      <el-radio label="female">女</el-radio>
    </el-radio-group>
    选中:{{radio3}}
    <el-divider></el-divider>
    <el-radio-group v-model="radio4" @change="courseChange">
      <el-radio-button label="chinese">语文</el-radio-button>
      <el-radio-button label="math">数学</el-radio-button>
      <el-radio-button label="english">英语</el-radio-button>
    </el-radio-group>
    <el-divider></el-divider>
    <el-radio-group v-model="radio4" size="medium">
      <el-radio-button label="chinese">语文</el-radio-button>
      <el-radio-button label="math">数学</el-radio-button>
      <el-radio-button label="english">英语</el-radio-button>
    </el-radio-group>
    <el-radio-group v-model="radio4" size="small">
      <el-radio-button label="chinese">语文</el-radio-button>
      <el-radio-button label="math">数学</el-radio-button>
      <el-radio-button label="english">英语</el-radio-button>
    </el-radio-group>
    <el-radio-group v-model="radio4" size="mini">
      <el-radio-button label="chinese">语文</el-radio-button>
      <el-radio-button label="math">数学</el-radio-button>
      <el-radio-button label="english">英语</el-radio-button>
    </el-radio-group>
    <el-divider></el-divider>

  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: 'male',
      radio2: 'basketball',
      radio3: 'male',
      radio4: 'chinese',
    };
  },
  methods: {
    sexChange() {
      console.log("sexChange");
    },
    courseChange() {
      console.log("courseChange");
    }
  }
}
</script>