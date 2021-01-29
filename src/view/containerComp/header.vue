<template>
  <div class="head">
    <p>大数据可视化展板</p>
    <div class="weather">
      <span>{{ showTime }}</span>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  name: "Header",
  components: {},
  // 定义属性
  data() {
    return {
      showTime: "",
      timer: null,
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    setShowTime() {
      var dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours(); //获取时
      var m = dt.getMinutes(); //获取分
      var s = dt.getSeconds(); //获取秒
      var showTime =
        y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
      this.showTime = showTime;
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(() => {
      this.setShowTime();
    }, 1000);
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang='scss' scoped>
.head {
  height: 51.4px;
  width: 100%;
  background: url("../container/head_bg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    font-size: 24px;
  }
  .weather {
    position: absolute;
    right: 15px;
    font-size: 15px;
    color: #fff;
  }
}
</style>