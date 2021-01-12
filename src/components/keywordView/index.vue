<template>
<div class="bg">
<search 
/>
<salesRank 
:salesrank='salesrank'
/>
 </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import search from './components/searchKeyword'
import salesRank from "./components/salesRank";
export default {
  props:{
    salesrank:{
     type:Object,
     default:{}
   }
  },
  components: {
    search,salesRank
  },
  // 定义属性
  data() {
    return {
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
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
  .bg{
    display: flex;
    margin-top: 20px;
  }
</style>