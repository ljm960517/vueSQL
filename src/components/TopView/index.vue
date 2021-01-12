<template>
  <div>
    <!-- gutter为间隔，span为el-col的宽度，单位为列数 一行最多24列 -->
    <el-row :gutter="20">
      <el-col :span="6"><el-card shadow="hover"><allSales :allSales='topData'/> </el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover"> <allOrders  :allOrders='topData'/></el-card></el-col>
      <el-col :span="6"><el-card shadow="hover"><todayUsers :todayUsers='topData' /></el-card></el-col>
      <el-col :span="6"> <el-card shadow="hover"><allUsers :allUsers='topData'/></el-card></el-col>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import allSales from "./components/allSales";
import allOrders from "./components/allOrders";
import todayUsers from "./components/todayUsers";
import allUsers from "./components/allUsers";
export default {
  components: { allSales, allOrders ,todayUsers,allUsers},
  props:{
    topData:{
      type:Object,
      default:{}
    }
  },
  // 定义属性
  data() {
    return {
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    // valueData(){
    //   return this.topData
    // }
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
  }
};
</script>

<style lang="scss" scoped>
// .ecard{
//   display: flex;
//   justify-content: center;
//   .box-card {
//   width: 20%;
// }
// }
</style>
