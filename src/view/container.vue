<template>
  <div class="content" :screenSize="setScreen">
    <iframe
      src="static/index.html"
      frameborder="0"
      scrolling="yes"
      allowfullscreen="true"
      style="width: 100%; height: 100%"
    >
    </iframe>
    <div class="content-main">
      <Header></Header>
      <div class="main-box">
        <MainLeft />
        <MainMid />
        <MainRight />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./containerComp/header";
import MainLeft from "./containerComp/mainLeft";
import MainMid from "./containerComp/MainMid";
import MainRight from "./containerComp/mainRight";
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  components: {
    Header,
    MainLeft,
    MainRight,
    MainMid,
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  let w = document.documentElement.offsetWidth || document.body.offsetWidth;
  console.log(w)
  },
  // 定义属性
  data() {
    return {
      setScreen: {
        width: 915,
        height: 580,
      },
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
  destroyed() {},
};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  height: 100%;
  position: relative;
  iframe {
    z-index: 1;
  }
  .content-main {
    height: 100%;
    width: 100%;
    z-index: 100;
    // transform: scale(1,1.1);
    transform-origin: top left;
    position: absolute;
    top: 0;
    .main-box {
      width: 100%;
      height: calc(100vh - 51.4px);
      display: flex;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>