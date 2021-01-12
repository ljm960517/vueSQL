<template>
<div>
<el-menu
 :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  active-text-color="#ffd04b"
  >
  <el-menu-item index="1">销售额</el-menu-item>
  <el-menu-item index="2">访问量</el-menu-item>
</el-menu>
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
        activeIndex2:'1'
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {
      
  },
  // 方法集合
  methods: {
      handleSelect(index){
       this.$emit('selectIndex',index)
      }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
}
</script>

<style lang='scss' scoped>

</style>