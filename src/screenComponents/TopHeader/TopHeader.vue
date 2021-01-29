<template>
  <div class="top-header">
    <h5>数据大屏Demo</h5>
    <h5 class="date">{{ nowDate }}</h5>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  components: {},
  // 定义属性
  data() {
    return {
      nowDate: "",
      timer:null
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      //定义timer方便清除定时器
    this.timer=setInterval(() => {
      this.nowDate = new Date().toLocaleString();
      console.log('1')
    }, 1000);
  },
  destroyed(){
      if(this.timer){
          clearInterval(this.timer)
      }
  }
};
</script>

<style lang='scss' scoped>
.top-header {
  height: 100%;
  display: flex;
  .date {
    position: absolute;
    right: 0;
  }
}
</style>