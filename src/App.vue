<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/layoutDemo">布局</router-link>|
      <router-link to="/containerDemo">布局容器</router-link>|
      <router-link to="/iconDemo">图标</router-link>|
      <router-link to="/ButtonDemo">按钮</router-link>|
      <router-link to="/RadioDemo">单选框</router-link>|
    </div>
    <el-divider></el-divider>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
