<template>
<div>
   <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
     <div class="line" />
    <div class="total">
      <slot name="footer"></slot>
    </div>
 </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
      props: {
      title: String,
      value: [String, Number]
    },
  components: {
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
    .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    font-size: 12px;
    color: #666;
  }
</style>

