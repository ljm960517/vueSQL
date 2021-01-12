<template>
<div>
     <div class="router-bt">
     <el-button type="success" v-model="sqlReport" @click='routerTo(sqlReport)' >数据报表页面</el-button>
    <el-button type="success" v-model="sqlScreen" disabled="">数据大屏页面</el-button>
    </div>
    <div style="display:flex;justify-content:center;margin-top:100px;font-size:40px">
        <router-link to="/test1" style="margin:0 20px">test1</router-link>
        <router-link to="/test2" style="margin:0 20px">test2</router-link>
        <router-link to="/test3" style="margin:0 20px">test3</router-link>
    </div>
<div class="cont" ref='refName'>数据大屏</div>
 </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  components: {
  },
  // 定义属性
  data() {
    return {
        sqlReport:'/',
sqlScreen:'/container'
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    routerTo(value){
     this.$router.push(`${value}`)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      
  },
  updated(){
      
  }
}
</script>

<style lang='scss' scoped>
 .router-bt{
        position: fixed;
        top:0;
        z-index: 99;
        opacity: 0.5;
      }
</style>